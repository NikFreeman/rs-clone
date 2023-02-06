import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categoryArray, renderCard } from './components/start-page/categories';
import './components/volume-control';
import { load } from './components/player';
import playMusic from './components/start-page/music';

getRandomWallpaper();
categoryArray.forEach((_, i) => renderCard(i));
document.body.addEventListener('click', getLinkToImage);

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
console.log('start');
const btnPlay = document.querySelector('.play');
const btnLoad = document.querySelector('.load');
// btnPlay?.addEventListener('click', play);
btnLoad?.addEventListener('click', load);
btnPlay?.addEventListener('click', playMusic);
