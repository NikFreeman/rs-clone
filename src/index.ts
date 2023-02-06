import './style.css';

import './components/volume-control';
import SoundPlayer from './components/player';
import ambienceCollection from './audio/ambience';
import createVisual from './components/visualization';

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
const btnLoad = document.querySelector('.load');
const btnPlay = document.querySelector('.play');

const player = new SoundPlayer(ambienceCollection);

btnLoad?.addEventListener('click', () => {
    player.loadAll();
});
btnPlay?.addEventListener('click', () => {
    player.playAll();
    createVisual(player.getVisualizationData());
});
