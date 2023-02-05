import { Howl, Howler } from 'howler';
import ambienceCollection from '../../audio/ambience';

// const playersSrc: Howl[] = [];
const song = new Howl({
    src: ambienceCollection[0] as unknown as string,
    preload: false,
});
const song1 = new Howl({
    src: ambienceCollection[1] as unknown as string,
    preload: false,
});
const song2 = new Howl({
    src: ambienceCollection[2] as unknown as string,
    preload: false,
});
const song3 = new Howl({
    src: ambienceCollection[3] as unknown as string,
    preload: false,
});
const song4 = new Howl({
    src: ambienceCollection[4] as unknown as string,
    preload: false,
});
const song5 = new Howl({
    src: ambienceCollection[5] as unknown as string,
    preload: false,
});
const song6 = new Howl({
    src: ambienceCollection[6] as unknown as string,
    preload: false,
});
export const songs = [song, song1, song2, song3, song4, song5, song6];

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
    songs.forEach((melody) => melody.load());
}
