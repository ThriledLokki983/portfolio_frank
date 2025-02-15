// Create a header here and inject it into the DOM

const LINKS = ['Home', 'Research', 'Teachings', 'Talks', 'Contact'];


const NavItems = `
	<nav id="navigation" class="nav">
		<ul class="nav__list">
			${LINKS.map((link, index) => `
				<li class="nav__item">
					<a href="${link.toLowerCase()}" aria-selected="${index === 0}" class="nav__link">${link}</a>
				</li>`).join('')
			}
		</ul>
	</nav>
`

export const headerContent = `
	<div class="logo">
		<a href="#">
			<img src="/logo.png" alt="Logo" />
		</a>
	</div>
	${NavItems}
`;