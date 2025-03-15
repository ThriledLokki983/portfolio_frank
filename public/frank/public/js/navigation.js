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

// Add a click event to the navItems to toggle the navigation menu specifically for mobile
navItems.forEach(item => {
	item.addEventListener('click', (e) => {
		const target = e.target.closest('button.toggle__icon');
		const subMenu = item.querySelector('div.sub__menu');

		const isOpen = target.getAttribute('data-mobile-expanded') === 'false';
		target.setAttribute('data-mobile-expanded', isOpen);
		subMenu.setAttribute('data-mobile-expanded', isOpen);
		item.setAttribute('data-mobile-expanded', isOpen);

		if (window.innerWidth < 768) {
			const height = subMenu.scrollHeight;
			subMenu.style.height = isOpen ? `${height + 15}px` : '0';
		}
	});
});
