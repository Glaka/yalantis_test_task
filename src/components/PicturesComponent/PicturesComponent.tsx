import * as React from 'react';
import { Picture } from './Picture';
export const PicturesComponent = ({ pictures, isLoading }: any) => {
    return (
        <div className="box">
            {isLoading ? (
                'is loading'
            ) : (
                <>
                    <h2>grid section</h2>
                    <button>add new </button>
                    {Object.keys(pictures).map((picture) => {
                        console.log(picture);
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
