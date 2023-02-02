const template = document.createElement('template');

const wrapper = document.createElement('div');

const volumeInput = document.createElement('input');

wrapper.append(volumeInput);
template.append(wrapper);
class VolumeControl extends HTMLElement {
    color: string;

    src: string;

    visualization: boolean;

    value: number;

    static get observedAttributes() {
        return ['src', 'visualization', 'value', 'color'];
    }

    constructor() {
        super();
        this.color = '';
        this.src = '';
        this.visualization = false;
        this.value = 0;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('volume-control', VolumeControl);
