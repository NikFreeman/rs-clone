import SoundPlayer from '../src/components/player';

jest.mock('howler', () => {
    const original = jest.requireActual('howler');
    return { ...original, Howler: { ctx: { createAnalyser: jest.fn() } } };
});

describe('create player', () => {
    test('create player with zero src', () => {
        const sound = new SoundPlayer([]);
        expect(sound.players.length).toBe(0);
        expect(sound.played).toBeFalsy();
    });
    test('create player with one src', () => {
        const sound = new SoundPlayer(['audio.mp3']);
        expect(sound.players.length).toBe(1);
        expect(sound.played).toBeFalsy();
    });
    test('create player with two src', () => {
        const sound = new SoundPlayer(['audio.mp3', 'sound.mp3']);
        expect(sound.players.length).toBe(2);
        expect(sound.played).toBeFalsy();
    });
});
describe('methods class', () => {
    let sound: SoundPlayer;
    beforeEach(() => {
        sound = new SoundPlayer(['audio.mp3', 'sound.mp3']);
    });
    test('isLoaded', () => {
        expect(sound.players.length).toBe(2);
        expect(sound.isLoaded()).toBeFalsy();
    });
    test('load another src', () => {
        expect(sound.players).toHaveLength(2);
        sound.setSrc(['sound0.mp3', 'sound1.mp3', 'sound2.mp3']);
        expect(sound.players.length).toBe(3);
    });
    test('getHowl', () => {
        const howls = sound.getHowl();
        expect(Array.isArray(howls)).toBeTruthy();
    });
});
