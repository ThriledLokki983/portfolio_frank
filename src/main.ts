import './styles/base.scss';

import { headerContent } from './components/header.ts';
import { introContent } from './components/home.ts';

import Renderer from './components/utils.ts';

const renderer = new Renderer();

renderer.render('header', headerContent);
renderer.render('home', introContent);

renderer.attachEvent('navigation', 'click', (e: Event) => {
  e.preventDefault();

  const target = e.target as HTMLElement;
  if (target.tagName === 'A') {
    const links = document.querySelectorAll('.nav__link');
    links.forEach(link => link.setAttribute('aria-selected', 'false'));
    target.setAttribute('aria-selected', 'true');
    // const id = target.getAttribute('id') as string || '';
    // const element = document.querySelector(`#${id}`);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  }
});