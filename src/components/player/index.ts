import { Howl, Howler } from 'howler';

class SoundPlayer {
    players: Howl[] = [];

    constructor(songSrc: string[]) {
        songSrc.forEach((src) => {
            const howl = new Howl({
                src: [src],
                preload: false,
            });
            console.log('howl ->', howl);
            this.players.push(howl);
        });
    }

    getHowl() {
        return this.players;
    }

    loadAll() {
        this.players.forEach((song) => {
            song.load();
        });
    }

    playAll() {
        if (this.players.length > 0) {
            this.players.forEach((song) => song.play());
        }
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
