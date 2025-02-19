import { PUBLICATIONS } from "./data/publications.js";
import { ListItem } from "./utils.js";

const publications = new ListItem(PUBLICATIONS, document.querySelector('.js-publication__list'));
publications.renderPublication();