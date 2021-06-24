import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
	constructor(slides) {
		this.slides = slides;
		this.imgBasePath = '/assets/images/carousel/';
		this.iconsBasePath = "/assets/images/icons/";
		this.elem = this.createCarousel();
		this.createAddToCardEventAndListener(this.elem);
	}

	createCarousel() {
		let rootEl = document.createElement('div');
		rootEl.className = 'carousel';

		rootEl.innerHTML = `
			<div class="carousel__arrow carousel__arrow_right">
				<img src="${this.iconsBasePath}angle-icon.svg" alt="icon">
			</div>
			<div class="carousel__arrow carousel__arrow_left">
				<img src="${this.iconsBasePath}angle-left-icon.svg" alt="icon">
			</div>
			<div class="carousel__inner">
			</div>`;

		let carouselInner = rootEl.querySelector('.carousel__inner');

		this.addSlides(carouselInner, this.slides);
		this.initCarousel(rootEl);
		return rootEl;
	}

	addSlides(slidesHolder, slides) {
		for (let slide of slides) {
			slidesHolder.insertAdjacentHTML('beforeend',
				` <div class="carousel__slide" data-id="${slide.id}">
					<img src="${this.imgBasePath}${slide.image}" class="carousel__img" alt="slide">
					<div class="carousel__caption">
					<span class="carousel__price">€${slide.price.toFixed(2)}</span>
					<div class="carousel__title">${slide.name}</div>
					<button type="button" class="carousel__button">
						<img src="/assets/images/icons/plus-icon.svg" alt="icon">
					</button>
					</div>
		 		</div>`);
		}
	}

	initCarousel(element) {
		const carouselInner = element.querySelector('.carousel__inner');
		const numOfSlides = carouselInner.querySelectorAll('.carousel__slide');
		const leftArrow = element.querySelector('.carousel__arrow_left');
		const rightArrow = element.querySelector('.carousel__arrow_right');

		let STEP = 500;
		const MAX_SHIFT = -STEP * (numOfSlides.length - 1);
		let shift = 0;

		checkArrows();

		leftArrow.addEventListener('click', () => {
			carouselInner.style.transform = `translateX(${shift += carouselInner.offsetWidth}px)`
		});

		rightArrow.addEventListener('click', () => {
			carouselInner.style.transform = `translateX(${shift -= carouselInner.offsetWidth}px)`
		});

		element.addEventListener('click', checkArrows);

		function checkArrows() {
			``
			shift === MAX_SHIFT ? rightArrow.style.display = 'none' : rightArrow.style.display = '';
			if (shift < 0) leftArrow.style.display = '';
			if (shift === 0) leftArrow.style.display = 'none';
		}
	}

	createAddToCardEventAndListener(element) {
		let buttons = element.querySelectorAll('.carousel__button');
		buttons.forEach(button => {
			button.addEventListener('click', (event) => test(event, button));
		});

		let myEvent;

		function test(event, button) {
			let id = button.closest('.carousel__slide').dataset.id;
			myEvent = new CustomEvent('product-add', { detail: id, bubbles: true });
			event.currentTarget.className === 'carousel__button' ? element.dispatchEvent(myEvent) : false;
		}
	}
}