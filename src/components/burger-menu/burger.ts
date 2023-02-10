const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const burgerContainer = document.querySelector('.burger-container');
const burgerModal = document.querySelector('.burger-modal');

function animateBurger() {
    if (!burgerContainer?.classList.contains('clicked')) {
        burgerContainer?.classList.add('clicked');
        line1?.classList.add('rotate-45', 'translate-y-2.5');
        line2?.classList.add('opacity-0');
        line3?.classList.add('-rotate-45', '-translate-y-2.5');
        if (burgerModal?.classList.contains('-right-96')) {
            burgerModal?.classList.remove('-right-96');
            burgerModal?.classList.add('right-2');
        }
    } else if (burgerContainer?.classList.contains('clicked')) {
        burgerContainer?.classList.remove('clicked');
        line1?.classList.remove('rotate-45', 'translate-y-2.5');
        line2?.classList.remove('opacity-0');
        line3?.classList.remove('-rotate-45', '-translate-y-2.5');
        if (burgerModal?.classList.contains('right-2')) {
            burgerModal?.classList.remove('right-2');
            burgerModal?.classList.add('-right-96');
        }
    }
}

burgerContainer?.addEventListener('click', animateBurger);
