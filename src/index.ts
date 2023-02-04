import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categories, renderCard } from './components/start-page/categories';
import './components/volume-control';
import { play, load } from './components/player';

getRandomWallpaper();
categories.forEach((category) => renderCard(category));
document.body.addEventListener('click', getLinkToImage);

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
console.log('start');
const btnPlay = document.querySelector('.play');
const btnLoad = document.querySelector('.load');
btnPlay?.addEventListener('click', play);
btnLoad?.addEventListener('click', load);
