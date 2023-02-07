import getRandomDigit from '../../models/utils';
import API_KEY from '../../models/constan';
import aboveAndBelow from '../../audio/audio-moods/above-and-below-the-waterline/index';
import cityVibes from '../../audio/audio-moods/city-vibes/index';
import closeToNature from '../../audio/audio-moods/close-to-nature/index';
import darknessWithin from '../../audio/audio-moods/darkness-within/index';
import meditateMe from '../../audio/audio-moods/meditate-me/index';
import sciFi from '../../audio/audio-moods/sci-fi/index';
import weatherForAll from '../../audio/audio-moods/weather-for-all/index';
import welcomeToTheVillage from '../../audio/audio-moods/welcome-to-the-village/index';

export const categoryArray = [
    {
        categoryName: 'water',
        mood: 'Above and below the Waterline',
        moodRu: '',
        description: 'Sea waves, rain and wind - the perfect natural soundscape to block out a noisy office.',
        descriptionRu: '',
        presets: ['The Watermill', 'By the River', 'Seashore', 'Underwater', 'Ocean'],
        presetsRu: [''],
        src: aboveAndBelow,
    },
    {
        categoryName: 'city',
        mood: 'City Vibes',
        moodRu: '',
        description:
            "You're sitting in a cafe, where a band is playing a down-tempo song. Meanwhile, you hear kids playing across the street. Life is good; right here, right now.",
        descriptionRu: '',
        presets: ['Cars', 'Road', 'Voice', 'Office', 'Street'],
        presetsRu: [''],
        src: cityVibes,
    },
    {
        categoryName: 'nature',
        mood: 'Close To Nature',
        moodRu: '',
        description:
            "Instead of listening to synthetic white noise, have you tried the sound of insects, singing at night. You're welcome!",
        descriptionRu: '',
        presets: ['Quiet Forest Tone', 'Singing Tree', 'Only Birds', 'Light Hail', 'Windy Day'],
        presetsRu: [''],
        src: closeToNature,
    },
    {
        categoryName: 'darkness',
        mood: 'Darkness Within',
        moodRu: '',
        description:
            'Embrace that darkness. Close your eyes, breathe deeply. Let the unknown envelop you. Let your subconscious run wild into oblivion.',
        descriptionRu: '',
        presets: ['Night', 'Empty Space', 'Thriller', 'Fear', 'Darkness'],
        presetsRu: [''],
        src: darknessWithin,
    },
    {
        categoryName: 'meditate',
        mood: 'Meditate Me',
        moodRu: '',
        description: 'A sonic bath to rejuvenate the mind and the soul.',
        descriptionRu: '',
        presets: ['Relax', 'Dream', 'Calm', 'Garden', 'Summer'],
        presetsRu: [''],
        src: meditateMe,
    },
    {
        categoryName: 'sci-fi',
        mood: 'Sci-Fi',
        moodRu: '',
        description:
            'In the middle of the interstellar void, alone in your vessel, you are heading to a black hole that absorbs matter... and time!',
        descriptionRu: '',
        presets: ['Preset One', 'Preset Two', 'Preset Three', 'Preset Four', 'Preset Five'],
        presetsRu: [''],
        src: sciFi,
    },
    {
        categoryName: 'weather',
        mood: 'Weather for All',
        moodRu: '',
        description: 'Background sounds can be used in order to help reduce distractions and improve focus.',
        descriptionRu: '',
        presets: ['Thunder', 'Storm', 'Rain', 'Wind', 'Snow'],
        presetsRu: [''],
        src: weatherForAll,
    },
    {
        categoryName: 'village',
        mood: 'Welcome to the Village',
        moodRu: '',
        description:
            'This soundscape recreates both the quieter ambience of a small village, as well as the busier atmosphere of a bigger town.',
        descriptionRu: '',
        presets: ['The Market', 'Meet the Blacksmith', 'Wedding Bells', 'War Times', 'Troubadours'],
        presetsRu: [''],
        src: welcomeToTheVillage,
    },
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
    const { presets } = categoryArray[index];
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
                <span class="category-name mb-0 font-bold text-blue-gray-700">${mood}</span>
                <p class="mb-0 text-xs">${categoryArray[index].description}</p>
            </div>
        </div>
    </div>
    <div class="mx-4 mt-4 translate-y-0">
        <div blur-shadow-image="true">
            <video
            class="w-auto rounded-lg" loop preload="auto"
            muted="true"
            src=${urls[1]}
            alt="card video"/>
        </div>
    </div>
    <div class="presets-block text-secondary flex-1 p-6 hidden">
        <h5 class="mt-2 font-medium">Presets</h5>
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
