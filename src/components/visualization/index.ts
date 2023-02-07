const container = document.createElement('div');
container.className = 'border w-64 h-30 bg-slate-800';

const containerVisual = document.createElement('div');
containerVisual.className = 'flex';

const canvasLeft = document.createElement('canvas');
const canvasRight = document.createElement('canvas');

containerVisual.append(canvasLeft, canvasRight);
const div = document.querySelector('.test');

function renderVisual() {
    div?.append(container);
}

export default renderVisual;
