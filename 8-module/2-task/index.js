import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
	constructor(products) {
		this.products = products;
		this.filters = {};
		this.elem = document.createElement('div');
		this.elem.classList.add('products-grid');
		this.elem.innerHTML = '<div class="products-grid__inner"></div>'
		this.render();
	}

	render() {
		let productsGridInner = this.elem.querySelector('.products-grid__inner');
		productsGridInner.innerHTML = '';

		for (let product of this.products) {
			if (this.filters.noNuts && product.nuts) {
				continue;
			}

			if (this.filters.vegeterianOnly && !product.vegeterian) {
				continue;
			}

			if ('maxSpiciness' in this.filters && product.spiciness > this.filters.maxSpiciness) {
				continue;
			}

			if (this.filters.category && product.category !== this.filters.category) {
				continue;
			}

			productsGridInner.insertAdjacentHTML('beforeend', `
			<div class='card'>
				<div class="card__top">
					<img src="/assets/images/products/${product.image}" class="card__image" alt="product">
					<span class="card__price">€${product.price}</span>
				</div>
				<div class="card__body">
					<div class="card__title">${product.name}</div>
					<button type="button" class="card__button">
						<img src="/assets/images/icons/plus-icon.svg" alt="icon">
					</button>
				</div>
			</div>`
			);
		}
	}

	updateFilter(filters) {
		Object.assign(this.filters, filters);
		this.render();
	}
}
