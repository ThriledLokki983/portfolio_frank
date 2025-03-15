// Add a click event to the navigation button to toggle the navigation menu
import trapFocus from "./inert.js";
const nav = document.querySelector('#primary-navigation');
const list = nav.querySelector('ul');
const navItems = Array.from(list?.querySelectorAll('li.nav__item'));
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const button = burgerClone.querySelector('button');

button.addEventListener('click', () => {
	const isOpen = button.getAttribute('aria-expanded') === 'false';
	button.setAttribute('aria-expanded', isOpen);
	nav.setAttribute('data-mobile-expanded',isOpen);
});

nav.insertBefore(burgerClone, list);
button.addEventListener('click', () => {
	trapFocus(nav);
});