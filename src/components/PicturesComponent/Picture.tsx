import * as React from 'react';
import { useDispatch } from 'react-redux';
import { editPicture } from '../../reducers/pictures/actions';
export const Picture = ({ picture }: any) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(editPicture(picture))}>
            <img src={picture.image} width="100" alt="." />
            <p>{picture.text}</p>
            <p>{picture.position}</p>
            <p>{picture.color}</p>
        </div>
    );
};
