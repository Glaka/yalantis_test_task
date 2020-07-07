import * as React from 'react';
import { removePicture, savePicture } from '../../reducers/pictures/actions';
import { useSelector } from 'react-redux';
export const PicturesEditComponent: React.FC = () => {
    const selectedPic = useSelector(
        (state: any) => state.pictureReducer.selectedPicture
    );
    console.log(selectedPic);

    return (
        <div className="box">
            {selectedPic ? (
                <div>
                    <h2>Edit image</h2>
                    <p>image itself</p>
                    <button type="button">change image</button>

                    <p>change tooltip</p>
                    <p>change tooltip color</p>
                    <p>change tooltip position</p>

                    <button type="button" onClick={() => savePicture()}>
                        save
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            removePicture();
                        }}
                    >
                        delete
                    </button>
                </div>
            ) : (
                'No selected item to edit'
            )}
        </div>
    );
};
