import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categoryArray, renderCard } from './components/start-page/categories';
import playMusic from './components/start-page/music';
import './components/piano/piano';
import './components/burger-menu/burger';
import './components/theme-switcher/theme-switcher';
import loadedSound from './components/loader/loader';

getRandomWallpaper();
categoryArray.forEach((_, i) => renderCard(i));
document.body.addEventListener('click', getLinkToImage);
document.addEventListener('load-src', loadedSound);

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
const btnPlay = document.querySelector('.play');

btnPlay?.addEventListener('click', playMusic);
