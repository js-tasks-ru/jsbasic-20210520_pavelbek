import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
	constructor(categories) {
		this.categories = categories;
		this.angleIcon = "/assets/images/icons/angle-icon.svg";
		this.elem = this.createRibbon(this.categories);
	}

	createRibbon(categories) {
		let rootEl = document.createElement('div');
		rootEl.className = 'ribbon';

		let links = categories
			.map(el => {
				return `<a href="#" class="ribbon__item" data-id="${el.id}">${el.name}</a>`
			})
			.join('');

		rootEl.innerHTML = `
				<button class="ribbon__arrow ribbon__arrow_left">
					<img src="${this.angleIcon}" alt="icon">
				</button>

				<nav class="ribbon__inner">
					${links}
				</nav>

				<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
					<img src="${this.angleIcon}" alt="icon">
				</button>
				`;

		rootEl.querySelectorAll('.ribbon__item').item(0).classList.add('ribbon__item_active');

		this.addArrowsEventListeners(rootEl);

		return rootEl;
	}

	addArrowsEventListeners(elem) {
		let leftArrow = elem.querySelector('.ribbon__arrow_left');
		let rightArrow = elem.querySelector('.ribbon__arrow_right');
		let ribbonInner = elem.querySelector('.ribbon__inner');
		let ribbonItems = elem.querySelectorAll('.ribbon__item');

		ribbonItems.forEach(item => {
			item.addEventListener('click', (event) => itemClicked(event, item));
		});

		ribbonInner.addEventListener('scroll', scrollMenu);
		leftArrow.addEventListener('click', scrollLeft);
		rightArrow.addEventListener('click', scrollRight);

		function scrollLeft() {
			ribbonInner.scrollBy(-350, 0);
		}

		function scrollRight() {
			ribbonInner.scrollBy(350, 0);
		}

		function scrollMenu() {
			let rightShift = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;

			if (ribbonInner.scrollLeft === 0) {
				leftArrow.classList.remove('ribbon__arrow_visible');
			}
			else {
				leftArrow.classList.add('ribbon__arrow_visible');
			}

			if (rightShift !== 0) {
				rightArrow.classList.add('ribbon__arrow_visible');
			} else {
				rightArrow.classList.remove('ribbon__arrow_visible');
			}
		}

		let ribbonSelect;

		function itemClicked(event, item) {
			event.preventDefault();
			let id = item.dataset.id;
			elem.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');;
			item.classList.add('ribbon__item_active');
			ribbonSelect = new CustomEvent('ribbon-select', { detail: id, bubbles: true });
			elem.dispatchEvent(ribbonSelect);
		}
	}
}
