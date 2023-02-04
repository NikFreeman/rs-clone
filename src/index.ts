import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categories, renderCard } from './components/start-page/categories';
// import playMusic from './components/start-page/music';

getRandomWallpaper();
categories.forEach((category) => renderCard(category));

document.body.addEventListener('click', getLinkToImage);
// document.querySelector('.play-btn')?.addEventListener('click', playMusic);
