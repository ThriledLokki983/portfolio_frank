
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
		})
	});
};
