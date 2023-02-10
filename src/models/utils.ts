import { DomClassManipulation } from './enums';

function getRandomDigit(max: number) {
    return Math.floor(Math.random() * max);
}

export function getNullCheckedElement(parent: Element | Document, selector: string): Element {
    const el = parent.querySelector(selector);
    if (!el) {
        throw new Error(`${selector} is not an element.`);
    }
    return el;
}

export function addRemoveDomClass(element: Element, classToManipulate: string, action: string): void {
    if (action === DomClassManipulation.add) {
        element.classList.add(classToManipulate);
    } else if (action === DomClassManipulation.remove) {
        element.classList.remove(classToManipulate);
    }
}

export default getRandomDigit;
