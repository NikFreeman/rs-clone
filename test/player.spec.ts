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
// describe('create player', function testCreate() {
//     it('test ', () => {
//         const sound = new SoundPlayer(['', '']);
//         expect(sound.players.length).toBe(2);
//     });
// });
