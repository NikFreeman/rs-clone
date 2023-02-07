const container = document.createElement('div');
container.className = 'border w-64 h-30 bg-slate-800';

const canvas = document.createElement('canvas');
canvas.className = '';

container.append(canvas);
const div = document.querySelector('.test');
div?.append(container);

function createVisual() {
    div?.append(container);
}

export default createVisual;
