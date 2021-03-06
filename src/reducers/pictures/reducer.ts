import { pictureActions, actionTypes } from "./actionTypes";
import { picturesState } from "../../helpers/types";


const initialState: picturesState = {
    pictures: {},
    selectedPicture: null
};

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
        case pictureActions.UPDATE_SELECTED:
            return {
                ...state, selectedPicture: {
                    ...state.selectedPicture,
                    [action.eventType]: action.data
                }
            }
        default:
            return state
    }
}

export default pictureReducer