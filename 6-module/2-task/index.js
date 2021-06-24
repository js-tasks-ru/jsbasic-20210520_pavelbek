import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
	constructor(product) {
		this.imgPath = "/assets/images/products/"
		this.price = product.price.toFixed(2);
		this.image = this.imgPath + product.image;
		this.name = product.name;
		this.category = product.category;
		this.id = product.id;
		this.elem = this.createCard();
		this.createAddToCardEventAndListener(this.elem);
	}

	createCard() {
		let rootEl = document.createElement('div');
		rootEl.className = 'card';

		rootEl.innerHTML = `<div class="card__top">
									<img src="${this.image}" class="card__image" alt="product">
									<span class="card__price">€${this.price}</span>
								 </div>
								 <div class="card__body">
									 <div class="card__title">${this.name}</div>
									 <button type="button" class="card__button">
            						<img src="/assets/images/icons/plus-icon.svg" alt="icon">
        							</button>
								 </div>`;

		return rootEl;
	}

	createAddToCardEventAndListener(element) {
		let button = element.querySelector('.card__button');
		button.addEventListener('click', generateEvent.bind(this));

		let myEvent = new CustomEvent('product-add', { detail: this.id, bubbles: true });

		function generateEvent(event) {
			event.currentTarget.className === 'card__button' ? element.dispatchEvent(myEvent) : false;
		}
	}
}