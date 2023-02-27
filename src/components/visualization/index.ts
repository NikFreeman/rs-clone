import SoundPlayer from '../player';

const canvasLeft = document.querySelector('.canvas-left') as HTMLCanvasElement;
const canvasRight = document.querySelector('.canvas-right') as HTMLCanvasElement;
const canvasLeftCtx = canvasLeft.getContext('2d');
const canvasRightCtx = canvasRight.getContext('2d');

function renderVisualization(player: SoundPlayer) {
    const bufferLength = player.getBufferLength();

    const barHeight = canvasLeft.height / bufferLength;

    function animate() {
        let y = 0;
        if (canvasLeftCtx && canvasRightCtx) {
            canvasLeftCtx.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
            canvasRightCtx.clearRect(0, 0, canvasRight.width, canvasRight.height);

            const dataArray = player.getVisualizationData();

            for (let i = 0; i < bufferLength; i += 1) {
                const barWidth = dataArray[i];
                const red = (i * barWidth) / 10;
                const green = i * 4;
                const blue = barWidth / 4 - 12;
                canvasLeftCtx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                canvasRightCtx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                canvasRightCtx.fillRect(0, canvasLeft.height - y, barWidth, barHeight);
                canvasLeftCtx.fillRect(canvasLeft.width - barWidth, canvasLeft.height - y, barWidth, barHeight);
                y += barHeight;
            }

            requestAnimationFrame(animate);
        }
    }
    animate();
}
export default renderVisualization;
