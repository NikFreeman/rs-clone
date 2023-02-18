import SoundPlayer from '../src/components/player';

jest.mock('howler', () => {
    const original = jest.requireActual('howler');
    return { ...original, Howler: { ctx: { createAnalyser: jest.fn() } } };
});

test('create player', () => {
    const sound = new SoundPlayer([]);
    expect(sound.players.length).toBe(0);
    expect(sound.played).toBeFalsy();
});
test('create player', () => {
    const sound = new SoundPlayer(['audio.mp3']);
    expect(sound.players.length).toBe(1);
    expect(sound.played).toBeFalsy();
});
test('create player', () => {
    const sound = new SoundPlayer(['audio.mp3','sound.mp3']);
    expect(sound.players.length).toBe(1);
    expect(sound.played).toBeFalsy();
});
test('unload player', () => {
    const sound = new SoundPlayer(['audio.mp3','sound.mp3']);
    expect(sound.players.length).toBe(2);
    expect(sound.isLoaded()).toBeFalsy();
});

describe ('load another src', ()=> {
    test ('create src', ()=> {
        const sound = new SoundPlayer(['audio.mp3','sound.mp3']);
    expect(sound.players.length).toBe(2);
    sound.setSrc(['sound0.mp3', 'sound1.mp3','sound2.mp3'])
    expect(sound.players.length).toBe(3)
    })
})