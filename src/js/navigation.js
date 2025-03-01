// Add a click event to the navigation button to toggle the navigation menu
const toggleButton = document.querySelector('.js-toggle-button');
const navigation = document.getElementById('navigation');


/**
 * This handles click events on the navigation links and sets an attribute [data-expanded="true"]
 * then add a rotate class to the arrow icon as well
 */
export const toggleNavigation = (navList) => {
	navList.forEach((navItem) => {
		// add a click event and add aria-selected to the active link and remove it from the rest
		navItem.addEventListener('click', (e) => {
			navList.forEach((item) => {
				item.setAttribute('aria-selected', 'false');
			});
			navItem.setAttribute('aria-selected', 'true');
			navigation.setAttribute('data-mobile-expanded', 'false');
			toggleButton.setAttribute('aria-expanded', 'false');
		})
	});
};



toggleButton.addEventListener('click', (e) => {
	const button = e.target.closest('button');
	const expanded = button.getAttribute('aria-expanded') === 'true' || false;
	button.setAttribute('aria-expanded', !expanded);
	navigation.setAttribute('data-mobile-expanded', !expanded);
});

