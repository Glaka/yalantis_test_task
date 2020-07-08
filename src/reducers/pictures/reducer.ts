import { pictureActions } from "./actionTypes";

// const initialState: any = {};
type Ipicture = {
    id: string;
    image: string;
    text: string;
    position: 'bottom' | 'top' | 'left' | 'right';
    color: string
}

type picturesState = {
    pictures: { [name: string]: Ipicture };
    selectedPicture: Ipicture | null;
}

const initialState: picturesState = {
    pictures: {},
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
        case pictureActions.EDIT_PICTURE:
            return { ...state, selectedPicture: action.data }
        case pictureActions.REMOVE_PICTURE:
            const prevState = { ...state.pictures };
            delete prevState[action.id]
            return { ...state, pictures: prevState }
        case pictureActions.SAVE_PICTURE:
            const newPic = { [action.data.id]: action.data }
            return { ...state, pictures: { ...state.pictures, ...newPic } }
        case pictureActions.CLEAR_SELECTED:
            return { ...state, selectedPicture: null }
        default:
            return state
    }
}

export default pictureReducer