export default class StepSlider {
	constructor({ steps, value = 0 }) {
		this.steps = steps;
		this.value = value;
		this.segments = this.steps - 1;

		this.elem = document.createElement('div');
		this.elem.classList.add('slider');
		this.elem.innerHTML = `
			<div class="slider__thumb">
				<span class="slider__value"></span>
			</div>
  
			<div class="slider__progress"></div>

			<div class="slider__steps">
				${'<span></span>'.repeat(this.steps)}
			</div>
		`;

		this.sliderValue = this.elem.querySelector('.slider__value');
		this.thumb = this.elem.querySelector('.slider__thumb');
		this.progress = this.elem.querySelector('.slider__progress');

		this.elem.addEventListener('click', (event) => this.clickSliderEventHandler(event, this.elem));

		this.changeValue(this.value);
	}

	changeValue(value) {
		this.sliderValue.innerHTML = value;
		this.value = value;

		let step = Math.round(100 / this.segments);
		let percentLeft = step * value;
		this.thumb.style.left = `${percentLeft}%`;
		this.progress.style.width = `${percentLeft}%`;

		let oldActive = this.elem.querySelector('.slider__step-active');

		if (oldActive) {
			oldActive.classList.remove('slider__step-active');
		}

		let activeStep = this.elem.querySelectorAll('.slider__steps span').item(value);
		activeStep.classList.add('slider__step-active');
	}

	clickSliderEventHandler(event, elem) {
		let point = ((event.clientX - elem.getBoundingClientRect().left) / elem.offsetWidth) * this.segments;

		this.changeValue(Math.round(point));

		let sliderChangedEvent = new CustomEvent('slider-change', {
			detail: this.value,
			bubbles: true
		});
		this.elem.dispatchEvent(sliderChangedEvent);
	}
}
