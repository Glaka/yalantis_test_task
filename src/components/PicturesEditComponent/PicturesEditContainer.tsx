import * as React from 'react';
import { PicturesEditComponent } from './PicturesEditComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
    removePicture,
    clearSelected,
    savePictureState,
    updateSelectedState,
} from '../../reducers/pictures/actions';
import { getBase64Image } from '../../helpers/utils';
import { Ipicture, AppState } from '../../helpers/types';

export const PicturesEditContainer: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const selectedPic = useSelector(
        (state: AppState) => state.pictureReducer.selectedPicture
    );

    const handleChange = (event: any) => {
        const target = event.target;
        const eventType = target.dataset.type;
        const value = target.value;
        if (eventType === 'image') {
            return getBase64Image(event).then((imageInBase64) => {
                dispatch(updateSelectedState(eventType, imageInBase64));
            });
        }
        dispatch(updateSelectedState(eventType, value));
    };

    const savePicture = (data: Ipicture) => {
        dispatch(savePictureState(data));
        dispatch(clearSelected());
    };

    const deletePicture = (id: string) => {
        dispatch(removePicture(id));
        dispatch(clearSelected());
    };

    return (
        <PicturesEditComponent
            deletePicture={deletePicture}
            savePicture={savePicture}
            selectedPic={selectedPic}
            handleChange={handleChange}
        />
    );
};

export default PicturesEditContainer;
