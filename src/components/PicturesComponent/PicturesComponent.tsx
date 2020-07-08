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
        <div className="box">
            {isLoading ? (
                'is loading'
            ) : (
                <>
                    <h2>grid section</h2>
                    <div>
                        <input
                            type="file"
                            name=""
                            id=""
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
