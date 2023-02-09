import getRandomDigit from '../../models/utils';
import API_KEY from '../../models/constan';
import waterSoundsPack from '../../audio/audio-moods/above-and-below-the-waterline/index';
import citySoundsPack from '../../audio/audio-moods/city-vibes/index';
import natureSoundsPack from '../../audio/audio-moods/close-to-nature/index';
import darknessSoundsPack from '../../audio/audio-moods/darkness-within/index';
import meditationSoundsPack from '../../audio/audio-moods/meditate-me/index';
import sciFiSoundsPack from '../../audio/audio-moods/sci-fi/index';
import weatherSoundsPack from '../../audio/audio-moods/weather-for-all/index';
import villageSoundsPack from '../../audio/audio-moods/welcome-to-the-village/index';

export const categoryArray = [
    waterSoundsPack,
    citySoundsPack,
    natureSoundsPack,
    darknessSoundsPack,
    meditationSoundsPack,
    sciFiSoundsPack,
    weatherSoundsPack,
    villageSoundsPack,
];

async function getAvatarAndVideo(category: string) {
    const avatarUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&orientation=vertical`;
    const res = await fetch(avatarUrl);
    const data = await res.json();
    const randomImg = getRandomDigit(data.hits.length);
    const imgSrc = `${data.hits[randomImg].previewURL}`;

    const videoUrl = `https://pixabay.com/api/videos/?key=${API_KEY}&q=${category}`;
    const vidRes = await fetch(videoUrl);
    const vidData = await vidRes.json();
    const randomVid = getRandomDigit(vidData.hits.length);
    const vidSrc = `${vidData.hits[randomVid].videos.tiny.url}`;
    return [imgSrc, vidSrc];
}

function getPresetTags(index: number) {
    const presets = categoryArray[index].presets.map((preset) => preset.presetName);
    if (presets) {
        const tags = presets.map(
            (preset, ind) =>
                `<span class="preset preset-${ind} text-base rounded hover:bg-sky-600 hover:text-yellow-200">${preset}</span>`
        );
        return tags.join(' • ');
    }
    return '';
}

export async function renderCard(index: number) {
    const { categoryName } = categoryArray[index];
    const { mood } = categoryArray[index];
    const wrapper = document.querySelector('.card-wrapper');
    const urls: string[] = await getAvatarAndVideo(categoryName);
    const card = document.createElement('div');
    card.className =
        'category-card flex flex-col cursor-pointer rounded-xl bg-white/30 backdrop-blur-sm text-neutral-900 bg-clip-border shadow-card max-w-sm drop-shadow-lg m-2 min-h-120 hover:backdrop-blur hover:drop-shadow-xl';
    card.innerHTML = `
    <div class="bg-transparent p-6 pt-0 mt-4 ease-in duration-200">
        <div class="flex ">
            <div class="inline-flex h-20 w-20 shrink-0">
                <img
                class="h-full w-full rounded-full border-double border-4 border-gray-300 hover:border-gray-600"
                src=${urls[0]}
                alt="avatar"
                />
            </div>
            <div class="ml-3">
                <span class="category-name mb-0 font-bold text-blue-gray-700">${mood}</span>
                <p class="mb-0 text-xs">${categoryArray[index].description}</p>
            </div>
        </div>
    </div>
    <div class="mx-4 translate-y-0">
        <div blur-shadow-image="true">
            <video
            class="w-auto rounded-lg" loop preload="auto"
            muted="true"
            src=${urls[1]}
            alt="card video"/>
        </div>
    </div>
    <div class="presets-block text-secondary flex-1 px-6 py-3 hidden ease-in duration-200">
        <h5 class="font-medium">Presets</h5>
        ${getPresetTags(index)}
    </div>
    `;
    if (wrapper) {
        wrapper.append(card);
    }
    card.addEventListener('mouseover', function play() {
        this.querySelector('video')?.play();
        this.querySelector('.presets-block')?.classList.remove('hidden');
    });

    card.addEventListener('mouseleave', function stop() {
        this.querySelector('video')?.pause();
        if (!this.classList.contains('active-card')) {
            this.querySelector('.presets-block')?.classList.add('hidden');
        }
    });
}
