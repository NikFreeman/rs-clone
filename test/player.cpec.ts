import { describe } from 'mocha';

import chai from 'chai';
// import sinon = require('sinon');

// import { Howl, Howler } from 'howler';
import SoundPlayer from '../src/components/player';
// import Sinon from 'sinon';
// import ambienceCollection from '../src/audio/ambience';

const { expect } = chai;
// describe('SoundPlayer unit test', () => {
//     // const stub = sinon.stub(Howler.ctx, 'createAnalyser').callsFake(() => AnalyserNode);
//     const testPlayer = new SoundPlayer();

//     it('Test class SoundPlayer', () => {
//         testPlayer.isLoaded().should.equal(true);
//     });
// });

describe('unit test', () => {
    it('should be create SoundPlayer', () => {
        // const spy =
        const sound = new SoundPlayer(['https://dl2.savemusic.me/mp3/f596a3eaad2063a38983656ebac6adb2.mp3']);

        expect(sound.players.length).to.equal(0);
        expect(sound.played).to.equal(false);
    });
});
