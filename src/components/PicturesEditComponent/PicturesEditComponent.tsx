import * as React from 'react';

type Props = {
    deletePicture: any;
    savePicture: any;
    selectedPic: any;
    handleChange: any;
};

export const PicturesEditComponent = ({
    deletePicture,
    savePicture,
    selectedPic,
    handleChange,
}: Props) => {
    return (
        <div>
            {selectedPic ? (
                <div>
                    <h2>Edit image</h2>
                    <img src={selectedPic.image} width="100" alt="." />
                    <input
                        type="file"
                        name=""
                        data-type="image"
                        onChange={(event) => handleChange(event)}
                    />

                    <div>
                        <p>change tooltip</p>
                        <input
                            onChange={(event) => handleChange(event)}
                            type="text"
                            data-type="text"
                            value={selectedPic.text}
                        />
                    </div>
                    <div>
                        <p>change color # code </p>
                        <input
                            onChange={(event) => handleChange(event)}
                            type="text"
                            data-type="color"
                            value={selectedPic.color}
                        />
                    </div>
                    <div>
                        <p>change position</p>
                        <select
                            onChange={(event) => handleChange(event)}
                            value={selectedPic.position}
                            data-type="position"
                        >
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                        </select>
                    </div>

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
