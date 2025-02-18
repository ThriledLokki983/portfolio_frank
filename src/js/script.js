'use strict';
import { toggleNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
	const primaryNav = document.querySelector('.navigation');
	const NavList = Array.from(
		document.querySelector('.navigation ul').querySelectorAll('li > a')
	);
	
	
	
	toggleNavigation(NavList);
});
