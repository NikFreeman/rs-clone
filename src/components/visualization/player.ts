// const player = new SoundPlayer(ambienceCollection);

// btnLoad?.addEventListener('click', () => {
//     player.loadAll();
// });
// btnPlay?.addEventListener('click', () => {
//     player.playAll();
//     createVisual();
//     const canvas = document.querySelector('canvas');

//     function animate() {
//         let x = 0;
//         if (canvas) {
//             const canvasCtx = canvas.getContext('2d');
//             if (canvasCtx) {
//                 canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

//                 const bufferLength = player.getBufferLength();
//                 const dataArray = player.getVisualizationData();
//                 const barWidth = canvas.width / bufferLength;
//                 for (let i = 0; i < bufferLength; i += 1) {
//                     const barHeight = dataArray[i];
//                     canvasCtx.fillStyle = 'white';
//                     canvasCtx?.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
//                     x += barWidth;
//                 }
//                 requestAnimationFrame(animate);
//             }
//         }
//     }

//     animate();
// });
// btnLoad?.addEventListener('click', () => {
//     player.loadAll();
// });
