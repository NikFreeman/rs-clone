import { Howl, Howler } from 'howler';
import ambience from "../../audio/ambience";

function play() {
    console.log(ambience);

    const sound = new Howl({
        src: ['sound.mp3'],
    });
    Howler.volume(0.5);
    sound.play();
}
export default play;
