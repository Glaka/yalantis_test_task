import * as React from 'react';
export const Picture = ({ picture }: any) => {
    console.log(picture);

    return (
        <div className="box" onClick={() => alert('EDIT => selectedPicture')}>
            <p>{picture.image}</p>
            <p>{picture.text}</p>
            <p>{picture.position}</p>
            <p>{picture.color}</p>
        </div>
    );
};
