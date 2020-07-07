import { pictureActions } from './actionTypes';
export const fetchPictures = (data: any) => {
    console.log('fetchPictures', data);

    return {
        type: pictureActions.FETCH_PICTURES,
        data
    }
}

export const addNewPicture = () => {
    console.log('addNewPicture');

    return {
        type: 'ACTION_NAME'
    }
}

export const editPicture = () => {
    console.log('editPicture');

    return {
        type: 'ACTION_NAME'
    }
}

export const savePicture = () => {
    console.log('savePicture');

    return {
        type: 'ACTION_NAME'
    }
}

export const removePicture = () => {
    console.log('removePicture');

    return {
        type: 'ACTION_NAME'
    }
}
