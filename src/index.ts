import './style.css';

import './components/volume-control';

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
