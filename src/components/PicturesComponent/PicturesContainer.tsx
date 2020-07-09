import * as React from 'react';
import { PicturesComponent } from './PicturesComponent';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import {
    fetchPictures,
    editPicture,
    clearSelected,
} from '../../reducers/pictures/actions';
import { getBase64Image } from '../../helpers/utils';
import { DEFAULT_PICTURE_VALUES, PICTURES_URL } from '../../helpers/constants';
import { AppState } from '../../helpers/types';

export const PicturesContainer: React.FC = () => {
    const dispatch = useDispatch();
    const pictures = useSelector(
        (state: AppState) => state.pictureReducer.pictures
    );
    const [isLoading, setLoading] = useState(true);

    const getPictures = React.useCallback(async () => {
        await Axios.get(PICTURES_URL)
            .then((response: any) => {
                dispatch(fetchPictures(response.data));
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [dispatch]);

    const createNewPictureState = (base64: string | unknown) => {
        if (base64 === false) return dispatch(clearSelected());
        const newPicture = {
            ...DEFAULT_PICTURE_VALUES,
            id: `${new Date().getTime()}`,
            image: base64,
        };
        dispatch(editPicture(newPicture));
    };

    const uploadPicture = (event: any) => {
        getBase64Image(event).then((imageInBase64) => {
            createNewPictureState(imageInBase64);
        });
    };

    useEffect(() => {
        if (isLoading) return;
        Axios.post(PICTURES_URL, pictures).catch(function (error) {
            console.log(error);
        });
    }, [isLoading, pictures]);

    useEffect(() => {
        getPictures();
    }, [getPictures]);

    return (
        <PicturesComponent
            pictures={pictures}
            isLoading={isLoading}
            uploadPicture={uploadPicture}
        />
    );
};

export default PicturesContainer;
