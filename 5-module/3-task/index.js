function initCarousel() {

	const carousel = document.querySelector('.carousel');
	const carouselInner = carousel.querySelector('.carousel__inner');
	const numOfSlides = carouselInner.querySelectorAll('.carousel__slide');
	const leftArrow = carousel.querySelector('.carousel__arrow_left');
	const rightArrow = carousel.querySelector('.carousel__arrow_right');

	const STEP = carouselInner.offsetWidth;
	const MAX_SHIFT = -STEP * (numOfSlides.length - 1);
	let shift = 0;

	checkArrows();

	leftArrow.addEventListener('click', () => carouselInner.style.transform = `translateX(${shift += STEP}px)`);
	rightArrow.addEventListener('click', () => carouselInner.style.transform = `translateX(${shift -= STEP}px)`);
	carousel.addEventListener('click', checkArrows);

	function checkArrows() {
		shift === MAX_SHIFT ? rightArrow.style.display = 'none' : rightArrow.style.display = '';
		if (shift < 0) leftArrow.style.display = '';
		if (shift === 0) leftArrow.style.display = 'none';
	}
}