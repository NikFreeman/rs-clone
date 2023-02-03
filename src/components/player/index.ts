import { Howl, Howler } from 'howler';
import ambienceCollection from '../../audio/ambience';

// const playersSrc: Howl[] = [];
const song = new Howl({
    src: ambienceCollection[0] as unknown as string,
    preload: false,
});

export function play() {
    // ambienceCollection.forEach((elem) => {
    //     const song = new Howl({
    //         src: [elem as unknown as string],
    //     });
    //     playersSrc.push(song);
    // });
    // playersSrc.forEach((song) => {
    //     song.load();
    //     song.on('load', function test() {
    //         // eslint-disable-next-line prefer-rest-params
    //         console.log(...arguments);
    //     });
    // });
    song.play();
    Howler.volume(1);
}
song.on('load', function test() {
    console.log('loading complete');
});

export function load() {
    song.load();
}
