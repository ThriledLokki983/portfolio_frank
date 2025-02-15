import './styles/base.scss';

import { headerContent } from './components/header.ts';

import Renderer from './components/utils.ts';

const renderer = new Renderer();

renderer.render('header', headerContent);