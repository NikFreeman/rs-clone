interface Preset {
    presetName: string;
    presetNameRu: string;
    presetValues: number[];
}

interface SLink {
    soundName: string;
    soundSrc: string;
}

export interface Mood {
    categoryName: string;
    mood: string;
    moodRu: string;
    description: string;
    descriptionRu: string;
    presets: Preset[];
    soundsLinks: SLink[];
}

export interface PianoKey extends HTMLLIElement {
    key: string;
}

export interface Localization {
    [key: string]: string;
}
