import { Howl, Howler } from 'howler';

class SoundPlayer {
    players: Howl[] = [];

    played: boolean;

    analyser: AnalyserNode;

    bufferLength: number;

    constructor(soundSrc: string[]) {
        this.played = false;
        this.bufferLength = 0;
        this.loadSrc(soundSrc);
        this.analyser = Howler.ctx.createAnalyser();
    }

    setSrc(soundSrc: string[]) {
        if (this.players.length > 0) {
            this.players.forEach((sound) => {
                sound.unload();
            });
        }
        this.players.length = 0;
        this.loadSrc(soundSrc);
    }

    loadSrc(soundSrc: string[]) {
        soundSrc.forEach((src) => {
            const howl = new Howl({
                src: [src],
                loop: true,
                preload: false,
                onload: () => {
                    if (this.isLoaded()) {
                        const event = new CustomEvent('load-src', { detail: soundSrc.length });
                        document.dispatchEvent(event);
                    }
                },
                onloaderror: () => {
                    const event = new CustomEvent('load-error');
                    document.dispatchEvent(event);
                },
            });
            this.players.push(howl);
        });
    }

    getHowl() {
        return this.players;
    }

    loadAll() {
        if (this.players.length > 0) {
            this.players.forEach((song) => {
                if (song.state() === 'unloaded') {
                    song.load();
                }
            });
        }
    }

    playAll() {
        if (this.players.length > 0) {
            if (this.isLoaded()) {
                this.players.forEach((sound) => sound.play());
            }
            this.played = true;
        }
    }

    stopAll() {
        if (this.isPlayed()) {
            this.players.forEach((sound) => sound.stop());
            this.played = false;
        }
    }

    isLoaded() {
        return this.players.every((howl) => howl.state() === 'loaded');
    }

    isPlayed() {
        return this.played;
    }

    setVolumeId(id: number, value: number) {
        this.players[id].volume(value);
    }

    setVolumeList(value: number) {
        this.players.forEach((note) => note.volume(value));
    }

    setVolume(value: number) {
        Howler.volume(value);
    }

    getVisualizationData() {
        Howler.masterGain.connect(this.analyser);
        this.analyser.fftSize = 128;
        this.bufferLength = this.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(this.bufferLength);
        this.analyser.connect(Howler.ctx.destination); // add connect source
        this.analyser.getByteFrequencyData(dataArray);
        return dataArray;
    }

    getBufferLength() {
        return this.bufferLength;
    }
}
export default SoundPlayer;
