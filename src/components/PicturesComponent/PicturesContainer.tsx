import * as React from 'react';
import { PicturesComponent } from './PicturesComponent';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { fetchPictures, editPicture } from '../../reducers/pictures/actions';
import { getBase64Image } from '../../helpers/utils';
import { DEFAULT_PICTURE_VALUES } from '../../helpers/defaultValues';

export const PicturesContainer: React.FC = () => {
    const PICTURES_URL = 'http://localhost:3004/images';
    const dispatch = useDispatch();
    const pictures = useSelector((state: any) => state.pictureReducer.pictures);
    const [isLoading, setLoading] = useState(true);

    const getPictures = React.useCallback(async () => {
        await Axios.get(PICTURES_URL)
            .then((response: any) => {
                dispatch(fetchPictures(response.data));
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [dispatch]);

    const uploadPicture = (event: any) => {
        getBase64Image(event).then((imageInBase64) => {
            const newPicture = {
                ...DEFAULT_PICTURE_VALUES,
                id: new Date().getTime(),
                image: imageInBase64,
            };
            localStorage.setItem('curr-img', `${imageInBase64}`);
            console.log(imageInBase64);
            console.log(newPicture);
            dispatch(editPicture(newPicture));

            // return res;
        });
    };

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
