/* eslint-disable prettier/prettier */
export const categories: string[] = ['Nature', 'Sport', 'Weather', 'Chill', 'Lounge', 'Guitar', 'City', 'Orchestra'];
const categoryPresets = new Map([
    [categories[0], ['Quiet Forest Tone', 'Singing Tree', 'Only Birds', 'Light Hail', 'Windy Day']],
    [categories[1], ['Running', 'Stadium', 'Fight', 'Athletics', 'Swimming']],
    [categories[2], ['Thunder', 'Storm', 'Rain', 'Wind', 'Snow']],
    [categories[3], ['Relax', 'Dream', 'Calm', 'Garden', 'Summer']],
    [categories[4], ['Preset One', 'Preset Two', 'Preset Three', 'Preset Four', 'Preset Five']],
    [categories[5], ['Rock', 'Acoustic', 'Song', 'Spanish melody', 'Bass']],
    [categories[6], ['Cars', 'Road', 'Voice', 'Office', 'Street']],
    [categories[7], ['Violin', 'Viola', 'Cello', 'Double Bass', 'Harp']],
]);

const categoryDescriptions = new Map([
    [categories[0], 'Instead of listening to synthetic white noise, have you tried the sound of insects, singing at night. You\'re welcome!'],
    [categories[1], 'Noise offers role play gamers dedicated soundscapes to help them create the perfect ambience for their games.'],
    [categories[2], 'Background sounds can be used in order to help reduce distractions and improve focus.'],
    [categories[3], 'Peace for the mind and the soul. Discover the calming effect of Gregorian vocals.'],
    [categories[4], 'This soundscape recreates both the quieter ambience of a small village, as well as the busier atmosphere of a bigger town.'],
    [categories[5], 'Our custom audio engine creates music tracks that never repeat exactly.'],
    [categories[6], 'You\'re sitting in a cafe, where a band is playing a down-tempo song. Meanwhile, you hear kids playing across the street. Life is good; right here, right now.'],
    [categories[7], 'The moment it starts playing, it will make you smile. Play it in the background to keep your mind tuned in to creative, inspired, and positive vibes.'],
]);

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

function getPresetTags(category: string) {
    const presets = categoryPresets.get(category);
    if (presets) {
        const tags = presets.map((preset, index) => `<span class="preset preset-${index} text-base rounded hover:bg-sky-600 hover:text-yellow-200">${preset}</span>`);
        return tags.join(' • ');
    }
    return '';
}

export async function renderCard(category: string) {
    const wrapper = document.querySelector('.card-wrapper');
    const urls: string[] = await getAvatarAndVideo(category);
    const card = document.createElement('div');
    card.className = 'category-card flex flex-col cursor-pointer rounded-xl bg-white/30 backdrop-blur-sm text-neutral-900 bg-clip-border shadow-card max-w-sm drop-shadow-lg m-2 min-h-120 hover:backdrop-blur hover:drop-shadow-xl';
    card.innerHTML = `
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
                <p class="mb-0 text-xs">${categoryDescriptions.get(category)}</p>
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
        <h5 class="mt-2 font-medium">Presets</h5>
        ${getPresetTags(category)}
    </div>
    `;
    if (wrapper) {
        wrapper.append(card);
    }
    card.addEventListener('mouseover', function play() {
        this.querySelector('video')?.play();
    });

    card.addEventListener('mouseleave', function stop() {
        this.querySelector('video')?.pause();
    });
}
