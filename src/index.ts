import './style.css';

import './components/volume-control';
import { play, load } from './components/player';

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
console.log('start');
const btnPlay = document.querySelector('.play');
const btnLoad = document.querySelector('.load');
btnPlay?.addEventListener('click', play);
btnLoad?.addEventListener('click', load);
