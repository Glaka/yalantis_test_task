import * as React from 'react';
import { Picture } from './Picture';
import { Loader } from '../Loader/Loader';
import { Ipictures } from '../../helpers/types';

type Props = {
    pictures: Ipictures;
    isLoading: boolean;
    uploadPicture: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const PicturesComponent = ({
    pictures,
    isLoading,
    uploadPicture,
}: Props) => {
    return (
        <div className="pictures">
            <h2>Pictures section</h2>
            <div className="grid">
                {isLoading ? (
                    <div className="grid-item">
                        <div className="grid-item_content ">
                            <Loader />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="grid-item">
                            <div className="grid-item_content ">
                                <label
                                    className="grid-item_upload"
                                    htmlFor="upload_new_picture"
                                >
                                    +
                                </label>
                                <input
                                    type="file"
                                    name=""
                                    className="input-hidden"
                                    id="upload_new_picture"
                                    onChange={(event) => uploadPicture(event)}
                                />
                            </div>
                        </div>
                        {Object.keys(pictures).map((picture) => {
                            return (
                                <Picture
                                    key={picture}
                                    picture={pictures[picture]}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};
