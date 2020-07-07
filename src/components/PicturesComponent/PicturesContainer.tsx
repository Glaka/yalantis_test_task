import * as React from 'react';
import { PicturesComponent } from './PicturesComponent';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { pictureActions } from '../../reducers/pictures/actionTypes';
import { fetchPictures } from '../../reducers/pictures/actions';

export const PicturesContainer: React.FC = () => {
    const PICTURES_URL = 'http://localhost:3004/images';
    const dispatch = useDispatch();
    const pictures = useSelector((state: any) => state.pictureReducer.pictures);
    const [isLoading, setLoading] = useState(true);

    const getPictures = async () => {
        await Axios.get(PICTURES_URL)
            .then((response: any) => dispatch(fetchPictures(response.data)))
            .then((r) => setLoading(false))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPictures();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(pictures);

    // return <PicturesComponent />;
    return <PicturesComponent pictures={pictures} isLoading={isLoading} />;
};

export default PicturesContainer;
