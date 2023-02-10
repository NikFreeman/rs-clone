import { Howl, Howler } from 'howler';

class SoundPlayer {
    players: Howl[] = [];

    played: boolean;

    analyser: AnalyserNode;

    bufferLength: number;

    constructor() {
        this.played = false;
        this.analyser = Howler.ctx.createAnalyser();
        this.bufferLength = 0;
    }

    setSrc(songSrc: string[]) {
        if (this.players.length > 0) {
            this.players.forEach((song) => {
                song.unload();
            });
        }
        this.players.length = 0;
        songSrc.forEach((src) => {
            const howl = new Howl({
                src: [src],
                loop: true,
                preload: false,
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
                this.players.forEach((song) => song.play());
            }
            this.played = true;
        }
    }

    stopAll() {
        if (this.isPlayed()) {
            this.players.forEach((song) => song.stop());
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
