async function getUnsplashLinkToImage(e: Event) {
    if (e.target instanceof HTMLElement) {
        const cart = e.target.closest('.category-cart');
        if (cart) {
            const categoryName = cart.querySelector('.category-name');
            if (categoryName) {
                const style = categoryName.textContent;
                document.body.style.transition = 'background 1s ease-in-out';
                const url = `https://pixabay.com/api/?key=33252685-38611dc0fea1785cc68501bc5&q=${style}&image_type=photo&orientation=horizontal`;
                const res = await fetch(url);
                const data = await res.json();
                const img = new Image();
                const randomImg = Math.floor(Math.random() * data.hits.length);
                img.src = `${data.hits[randomImg].largeImageURL}`;
                img.onload = () => {
                    document.body.style.background = `url(${img.src}) no-repeat center center/cover`;
                };
            }
        }
    }
}

export default getUnsplashLinkToImage;
