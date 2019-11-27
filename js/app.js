document.addEventListener("DOMContentLoaded", () => {
	menuHandler();
	$('.carousel').slick();
});

// menu handler
const menuHandler = () => {
	const menuButton = document.querySelector('.mob-button');
	const menu = document.querySelector('nav ul');

	menuButton.addEventListener('click', ()=> {
		menuButton.classList.toggle('open');
		menu.classList.toggle('open');
	})
}