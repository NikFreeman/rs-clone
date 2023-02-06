const container = document.createElement('div');
const canvas = document.createElement('canvas');
const canvasCtx = canvas.getContext('2d');

container.append(canvas);

function createVisual(dataArray: Uint8Array) {
    const WIDTH = 250;
    const HEIGHT = 250;
    console.log(dataArray);
    canvasCtx?.clearRect(0, 0, WIDTH, HEIGHT);
}

export default createVisual;
