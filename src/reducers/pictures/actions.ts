import { pictureActions } from './actionTypes';
export const fetchPictures = (data: any) => {
    return {
        type: pictureActions.FETCH_PICTURES,
        data
    }
}

export const addNewPicture = () => {
    return {
        type: 'ACTION_NAME'
    }
}

export const editPicture = (data: any) => {
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
