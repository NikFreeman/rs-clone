import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categories, renderCard } from './components/start-page/categories';

getRandomWallpaper();
categories.forEach((category) => renderCard(category));

document.body.addEventListener('click', getLinkToImage);
