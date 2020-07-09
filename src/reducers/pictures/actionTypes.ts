import { Ipictures, Ipicture } from './../../helpers/types';
export enum pictureActions {
    FETCH_PICTURES = 'FETCH_PICTURES',
    EDIT_PICTURE = 'EDIT_PICTURE',
    SAVE_PICTURE = 'SAVE_PICTURE',
    REMOVE_PICTURE = 'REMOVE_PICTURE',
    CLEAR_SELECTED = 'CLEAR_SELECTED',
    UPDATE_SELECTED = 'UPDATE_SELECTED',

}

interface fetchPictures {
    type: pictureActions.FETCH_PICTURES
    data: Ipictures
}

interface editPicture {
    type: pictureActions.EDIT_PICTURE
    data: Ipicture
}
interface savePictureState {
    type: pictureActions.SAVE_PICTURE
    data: Ipicture
}

interface clearSelected {
    type: pictureActions.CLEAR_SELECTED
}

interface removePicture {
    type: pictureActions.REMOVE_PICTURE,
    id: string
}
interface updateSelectedState {
    type: pictureActions.UPDATE_SELECTED,
    eventType: string,
    data: any
}

export type actionTypes = fetchPictures
    | editPicture
    | savePictureState
    | clearSelected
    | removePicture
    | updateSelectedState;