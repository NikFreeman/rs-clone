export const categories: string[] = ['Nature', 'Sport', 'Weather', 'Chill', 'Lounge', 'Guitar', 'City', 'Orchestra'];
// const presets: string[] = ['Quiet Forest Tone',
// 'Singing Tree', 'Only Birds', 'Light Hail', 'Windy Day'];

async function getAvatarAndVideo(category: string) {
    const avatarUrl = `https://pixabay.com/api/?key=33252685-38611dc0fea1785cc68501bc5&q=${category.toLowerCase()}&image_type=photo&orientation=vertical`;
    const res = await fetch(avatarUrl);
    const data = await res.json();
    const imgSrc = `${data.hits[0].previewURL}`;

    const videoUrl = `https://pixabay.com/api/videos/?key=33252685-38611dc0fea1785cc68501bc5&q=${category.toLowerCase()}`;
    const vidRes = await fetch(videoUrl);
    const vidData = await vidRes.json();
    const vidSrc = `${vidData.hits[0].videos.tiny.url}`;
    return [imgSrc, vidSrc];
}

export async function renderCart(category: string) {
    const wrapper = document.querySelector('.cart-wrapper');
    const urls: string[] = await getAvatarAndVideo(category);

    // const url = `https://pixabay.com/api/?key=33252685-38611dc0fea1785cc68501bc5&q=${style}&image_type=photo&orientation=horizontal`;
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     const img = new Image();
    //     const randomImg = Math.floor(Math.random() * data.hits.length);
    //     img.src = `${data.hits[randomImg].largeImageURL}`;
    //     img.onload = () => {
    //         document.body.style.background = `url(${img.src}) no-repeat center center/cover`;
    //     };

    const cart = document.createElement('div');
    // eslint-disable-next-line prettier/prettier
    cart.className = 'category-cart flex flex-col cursor-pointer rounded-xl bg-white/30 backdrop-blur-sm text-neutral-900 bg-clip-border shadow-card max-w-sm drop-shadow-lg m-2 min-h-160 hover:backdrop-blur hover:drop-shadow-xl';
    cart.innerHTML = `
    <div class="bg-transparent p-6 pt-0 mt-4">
        <div class="flex ">
            <div class="inline-flex h-20 w-20 shrink-0">
                <img
                class="h-full w-full rounded-full border-double border-4 border-gray-300 hover:border-gray-600"
                src=${urls[0]}
                alt="avatar"
                />
            </div>
            <div class="ml-3">
                <span class="category-name mb-0 font-bold text-blue-gray-700">${category}</span>
                <p class="mb-0 text-xs">Instead of listening to synthetic white noise, have you tried the sound of insects, singing at night. You're welcome!</p>
            </div>
        </div>
    </div>
    <div class="mx-4 mt-4 translate-y-0">
        <div blur-shadow-image="true">
            <video
            class="w-auto rounded-lg" loop preload="auto"
            src=${urls[1]}
            alt="card video"/>
        </div>
    </div>
    <div class="text-secondary flex-1 p-6">
        <span class="text-sm font-bold uppercase text-orange-500">Hub</span>
        <h5 class="mt-2 font-medium">Presets</h5>
        <span class="preset preset-0 text-base rounded hover:bg-sky-600 hover:text-yellow-200">Quiet Forest Tone</span>
          • <span class="preset preset-1 text-base rounded hover:bg-sky-600 hover:text-yellow-200">Singing Tree</span>
          • <span class="preset preset-2 text-base rounded hover:bg-sky-600 hover:text-yellow-200">Only Birds</span>
            • <span class="preset preset-3 text-base rounded hover:bg-sky-600 hover:text-yellow-200">Light Hail</span>
            • <span class="preset preset-4 text-base rounded hover:bg-sky-600 hover:text-yellow-200">Windy Day</span>
    </div>
    `;
    if (wrapper) {
        wrapper.append(cart);
    }
}
