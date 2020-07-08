import * as React from 'react';
import { Picture } from './Picture';

type Props = {
    pictures: any;
    isLoading: boolean;
    uploadPicture: (event: any) => void;
};

export const PicturesComponent = ({
    pictures,
    isLoading,
    uploadPicture,
}: Props) => {
    return (
        <div>
            {isLoading ? (
                'is loading'
            ) : (
                <>
                    <h2>grid section</h2>
                    <div>
                        <label htmlFor="upload_new_picture">+</label>
                        <input
                            type="file"
                            name=""
                            style={{ opacity: 0 }}
                            id="upload_new_picture"
                            onChange={(event) => uploadPicture(event)}
                        />
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
    );
};
