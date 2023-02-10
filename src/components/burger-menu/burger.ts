const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const burgerContainer = document.querySelector('.burger-container');

function animateBurger() {
    if (!burgerContainer?.classList.contains('clicked')) {
        burgerContainer?.classList.add('clicked');
        line1?.classList.add('rotate-45', 'translate-y-2.5');
        line2?.classList.add('opacity-0');
        line3?.classList.add('-rotate-45', '-translate-y-2.5');
    } else if (burgerContainer?.classList.contains('clicked')) {
        burgerContainer?.classList.remove('clicked');
        line1?.classList.remove('rotate-45', 'translate-y-2.5');
        line2?.classList.remove('opacity-0');
        line3?.classList.remove('-rotate-45', '-translate-y-2.5');
    }
}

burgerContainer?.addEventListener('click', animateBurger);
