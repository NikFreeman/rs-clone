import './style.css';

import './components/volume-control';
import play from './components/player';

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);

play();
