export type Ipicture = {
    id: string;
    image: string | unknown;
    text: string;
    position: string;
    color: string
}

export type Ipictures = { [name: string]: Ipicture }

export type picturesState = {
    pictures: Ipictures;
    selectedPicture: Ipicture | null;
}

export type AppState = {
    pictureReducer: picturesState
}