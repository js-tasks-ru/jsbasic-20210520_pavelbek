function toggleText() {

	const toggleTextButton = document.querySelector('.toggle-text-button');
	const elementToHide = document.getElementById('text');

	toggleTextButton.addEventListener('click', () => elementToHide.hidden = !elementToHide.hidden)
}
