import { getRandomDigit, getNullCheckedElement } from '../../models/utils';
import { categoryArray } from './categories';
import API_KEY from '../../models/constan';

function findCategory(mood: string) {
    const card = categoryArray.find((category) => category.mood.toLowerCase() === mood.toLowerCase());
    return card?.categoryName;
}

export async function getRandomWallpaper() {
    document.body.style.transition = 'background 1s ease-in-out';
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=music&image_type=photo&orientation=horizontal`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    const randomImg = getRandomDigit(data.hits.length);
    img.src = `${data.hits[randomImg].largeImageURL}`;
    img.onload = () => {
        document.body.style.background = `url(${img.src}) no-repeat center center/cover`;
    };
}

let currentMood = document.querySelector('.preset-name')?.textContent?.split(' /')[0].toLowerCase();

export async function getLinkToImage(e: Event) {
    if (e.target instanceof HTMLElement) {
        const card = e.target.closest('.category-card');
        if (card) {
            const mood = getNullCheckedElement(card, '.category-name').textContent?.toLowerCase();
            if (mood && mood !== currentMood) {
                const style = findCategory(mood);
                document.body.style.transition = 'background 1s ease-in-out';
                const url = `https://pixabay.com/api/?key=${API_KEY}&q=${style}&image_type=photo&orientation=horizontal`;
                const res = await fetch(url);
                const data = await res.json();
                const img = new Image();
                const randomImg = getRandomDigit(data.hits.length);
                img.src = `${data.hits[randomImg].largeImageURL}`;
                img.onload = () => {
                    document.body.style.background = `url(${img.src}) no-repeat center center/cover`;
                };
                currentMood = mood;
            }
        }
    }
}
