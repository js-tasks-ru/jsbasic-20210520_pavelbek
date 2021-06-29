import createElement from '../../assets/lib/create-element.js';

export default class Modal {
	constructor() {
		this.modalWindow = document.createElement('div');
		this.modalWindow.classList.add('modal');
		this.modalWindow.innerHTML = `
				<div class="modal__overlay"></div>

				<div class="modal__inner">
					<div class="modal__header">
					<!--Кнопка закрытия модального окна-->
					<button type="button" class="modal__close">
						<img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
					</button>
			
					<h3 class="modal__title">

					</h3>
					</div>
		
					<div class="modal__body">

					</div>
				</div>
		`;

		document.body.appendChild(this.modalWindow);

		let closeButton = this.modalWindow.querySelector('.modal__close');
		
		closeButton.addEventListener('click', (event) => this.closeModalWindow(event, this.modalWindow));
		document.addEventListener('keydown', (event) => this.closeModalWindow(event, this.modalWindow));
	}

	setTitle(val) {
		let title = document.querySelector('.modal__title');
		title.innerHTML = "";
		title.textContent = val;
	}

	setBody(val) {
		let modalBody = document.querySelector('.modal__body');
		modalBody.innerHTML = "";
		modalBody.appendChild(val);
	}

	open() {
		document.body.classList.add('is-modal-open');
	}

	close() {
		this.modalWindow.remove();
		document.body.classList.remove('is-modal-open');
	}

	closeModalWindow(event, window) {
		if (event.currentTarget.className === 'modal__close' || event.code === 'Escape') {
			window.remove();
			document.body.classList.remove('is-modal-open');
		}
	}
}