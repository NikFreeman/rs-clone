import { getNullCheckedElement } from '../../models/utils';

const line1 = getNullCheckedElement(document, '.line1');
const line2 = getNullCheckedElement(document, '.line2');
const line3 = getNullCheckedElement(document, '.line3');
const burgerContainer = getNullCheckedElement(document, '.burger-container');
const burgerModal = getNullCheckedElement(document, '.burger-modal');

function animateBurger(): void {
    if (!burgerContainer.classList.contains('clicked')) {
        burgerContainer.classList.add('clicked');
        line1.classList.add('rotate-45', 'translate-y-2.5');
        line2.classList.add('opacity-0');
        line3.classList.add('-rotate-45', '-translate-y-2.5');
        if (burgerModal.classList.contains('-right-96')) {
            burgerModal.classList.remove('-right-96');
            burgerModal.classList.add('right-2');
        }
    } else if (burgerContainer.classList.contains('clicked')) {
        burgerContainer.classList.remove('clicked');
        line1.classList.remove('rotate-45', 'translate-y-2.5');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-2.5');
        if (burgerModal.classList.contains('right-2')) {
            burgerModal.classList.remove('right-2');
            burgerModal.classList.add('-right-96');
        }
    }
}

burgerContainer.addEventListener('click', animateBurger);
