import { describe } from 'mocha';

import chai from 'chai';
import sinon = require('sinon');

import { Howl, Howler } from 'howler';
import SoundPlayer from '../src/components/player';

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
        const spySpy = sinon.spy(Howler.ctx.createAnalyser);
        // const spy = sinon.replace(Howler.ctx, 'createAnalyser', {new AnalyserNode({})});
        const sound = new SoundPlayer();
        spySpy.restore();

        expect(sound.players.length).to.equal(0);
        expect(sound.played).to.equal(false);
    });
});
