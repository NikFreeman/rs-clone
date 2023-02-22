import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categoryArray, renderCard } from './components/start-page/categories';
import { getNullCheckedElement } from './models/utils';
import playMusic from './components/start-page/music';
import './components/piano/piano';
import './components/theme-switcher/theme-switcher';
import loadedSound from './components/loader/loader';
import animateBurger from './components/burger-menu/burger';

getRandomWallpaper();
categoryArray.forEach((_, i) => renderCard(i));

document.body.addEventListener('click', getLinkToImage);

const burgerContainer = getNullCheckedElement(document, '.burger-container');
burgerContainer.addEventListener('click', animateBurger);

document.addEventListener('load-src', loadedSound);

const btnPlay = document.querySelector('.play');
btnPlay?.addEventListener('click', playMusic);
