import * as React from 'react';

type Props = {
    deletePicture: any;
    savePicture: any;
    selectedPic: any;
};

export const PicturesEditComponent = ({
    deletePicture,
    savePicture,
    selectedPic,
}: Props) => {
    console.log('render');
    // console.log(selectedPic);
    let storedImg = localStorage.getItem('curr-img') || selectedPic.image;

    return (
        <div className="box">
            {selectedPic ? (
                <div>
                    <h2>Edit image</h2>
                    {/* <p>{localStorage.getItem('curr-img')} </p> */}
                    <img src={storedImg} alt="." />
                    {/* <img src={selectedPic.image} alt="." /> */}
                    <p>image itself</p>
                    <button type="button">change image</button>

                    <p>change tooltip</p>
                    <p>{selectedPic.text}</p>
                    <p>change tooltip color</p>
                    <p>{selectedPic.color}</p>
                    <p>change tooltip position</p>
                    <p>{selectedPic.position}</p>
                    <p>{selectedPic.id} - id </p>

                    <button
                        type="button"
                        onClick={() => savePicture(selectedPic)}
                    >
                        save
                    </button>
                    <button
                        type="button"
                        onClick={() => deletePicture(selectedPic.id)}
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
