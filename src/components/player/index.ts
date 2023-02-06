import { Howl, Howler } from 'howler';

class SoundPlayer {
    players: Howl[] = [];

    played: boolean;

    constructor(songSrc: string[]) {
        songSrc.forEach((src) => {
            const howl = new Howl({
                src: [src],
                loop: true,
                preload: false,
            });
            this.players.push(howl);
        });
        this.played = false;
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

    getStatus() {
        return this.players.map((song) => song.state());
    }
}
export default SoundPlayer;
