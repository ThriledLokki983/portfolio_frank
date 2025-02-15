
const links = [
	{ label: 'Home', id: 'home'},
	{ label: 'Projects', id: 'projects'},
	{ label: 'Experience', id: 'experience'},
	{ label: 'About me', id: 'about'},
	{ label: 'Contact', id: 'contact'},
];

export const navigation = () => {

	const navContent = `
		<ul class="nav__list">
			${links.map(({ label, id }, index) => `
				<li class="nav__item">
					<a href="#${id}" id="#${id}" class="nav__link">
						<span>0${index + 1}.</span> ${label}
					</a>
				</li>`).join('')
			}
		</ul>
	`

	return navContent;
};