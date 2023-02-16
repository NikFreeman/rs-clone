let i = 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadedSound(src: string, ind: number, arr: string[]) {
    // eslint-disable-next-line no-plusplus
    console.log('loaded ', ((ind + 1) / arr.length) * 100, '%, ', i++, 'src: ', src);
}

export default loadedSound;
