import * as React from 'react';
import { PicturesEditComponent } from './PicturesEditComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
    removePicture,
    clearSelected,
    savePictureState,
} from '../../reducers/pictures/actions';

export const PicturesEditContainer: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const savePicture = (data: any) => {
        dispatch(savePictureState(data));
        dispatch(clearSelected());
    };

    const deletePicture = (id: string) => {
        dispatch(removePicture(id));
        dispatch(clearSelected());
    };

    const selectedPic = useSelector(
        (state: any) => state.pictureReducer.selectedPicture
    );
    // useEffect(() => {
    // }, []);

    return (
        <PicturesEditComponent
            deletePicture={deletePicture}
            savePicture={savePicture}
            selectedPic={selectedPic}
        />
    );
};

export default PicturesEditContainer;
