async function getUnsplashLinkToImage(e: Event) {
  if (e.target instanceof HTMLButtonElement) {
    const style = e.target.textContent;
    // const url = `https://api.unsplash.com/photos/random?query=${style}&client_id=PXAZgahzsj3eIJsB5QqbfWfqqUnyqirGFLr4W7Asuwc`;
    const url = `https://pixabay.com/api/?key=33252685-38611dc0fea1785cc68501bc5&q=${style}&image_type=photo&orientation=horizontal`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    const randomImg = Math.floor(Math.random() * data.hits.length);
    // img.src = `${data.urls.regular}`;
    img.src = `${data.hits[randomImg].largeImageURL}`;
    img.onload = () => {
      document.body.style.background = `url(${img.src}) no-repeat center center/cover`;
    };
  }
}

export default getUnsplashLinkToImage;
