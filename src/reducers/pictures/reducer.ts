import { pictureActions } from "./actionTypes";

// const initialState: any = {};
type Ipicture = {
    image: string;
    text: string;
    position: 'bottom' | 'top' | 'left' | 'right';
    color: string
}

type picturesState = {
    selectedPicture: Ipicture | null;
    pictures: { [name: string]: Ipicture };
}

const initialState: any = {
    pictures: {
        // "124512": {
        //     "image": "image",
        //     "text": "tooltip_text",
        //     "position": "tooltip_position",
        //     "color": "tooltip_color"
        // }
    },
    selectedPicture: null
};

type actionTypes = any

const pictureReducer = (
    state: picturesState = initialState,
    action: actionTypes
) => {
    switch (action.type) {
        case pictureActions.FETCH_PICTURES:
            return { ...state, pictures: action.data }
        default:
            return state
    }
}

export default pictureReducer