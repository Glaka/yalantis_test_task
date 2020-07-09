import { Ipictures, Ipicture } from './../../helpers/types';
import { pictureActions } from './actionTypes';
export const fetchPictures = (data: Ipictures) => {
    return {
        type: pictureActions.FETCH_PICTURES,
        data
    }
}

export const editPicture = (data: Ipicture) => {
    return {
        type: pictureActions.EDIT_PICTURE,
        data
    }
}

export const savePictureState = (data: any) => {
    return {
        type: pictureActions.SAVE_PICTURE,
        data
    }
}

export const clearSelected = () => {
    return {
        type: pictureActions.CLEAR_SELECTED
    }
}

export const removePicture = (id: string) => {
    return {
        type: pictureActions.REMOVE_PICTURE,
        id
    }
}

export const updateSelectedState = (eventType: string, data: any) => {
    return {
        type: pictureActions.UPDATE_SELECTED,
        eventType,
        data
    }
}
