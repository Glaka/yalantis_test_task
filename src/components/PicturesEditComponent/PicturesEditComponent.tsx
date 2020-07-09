import * as React from 'react';
import { getTooltipPos } from '../../helpers/utils';

type Props = {
    deletePicture: (id: string) => void;
    savePicture: (data: any) => void;
    selectedPic: any;
    handleChange: (event: any) => void;
};

export const PicturesEditComponent = ({
    deletePicture,
    savePicture,
    selectedPic,
    handleChange,
}: Props) => {
    const tooltipStyle = selectedPic && {
        backgroundColor: selectedPic.color,
        ...getTooltipPos(selectedPic.position),
    };

    return (
        <div className="pictures-edit">
            <div className="content">
                <h2>Edit image</h2>
                {selectedPic ? (
                    <div>
                        <div className="form-group">
                            <div
                                className="preview"
                                style={{
                                    backgroundImage: `url(${selectedPic.image})`,
                                }}
                            >
                                <div
                                    className="preview_tooltip tooltip"
                                    style={tooltipStyle}
                                >
                                    {selectedPic.text}
                                </div>
                            </div>
                            <label className="button" htmlFor="edit_image_src">
                                EDIT IMAGE
                            </label>
                            <input
                                className="input-hidden"
                                id="edit_image_src"
                                type="file"
                                data-type="image"
                                onChange={(event) => handleChange(event)}
                            />
                        </div>

                        <div className="form-group">
                            <p>Tooltip text</p>
                            <input
                                className="input"
                                onChange={(event) => handleChange(event)}
                                type="text"
                                data-type="text"
                                value={selectedPic.text}
                            />
                        </div>
                        <div className="form-group">
                            <p>Color</p>
                            <input
                                className="input"
                                onChange={(event) => handleChange(event)}
                                type="color"
                                data-type="color"
                                value={selectedPic.color}
                            />
                        </div>
                        <div className="form-group">
                            <p>Position</p>
                            <select
                                className="input"
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
                            className="button"
                            type="button"
                            onClick={() => savePicture(selectedPic)}
                        >
                            save
                        </button>
                        <button
                            className="button"
                            type="button"
                            onClick={() => deletePicture(selectedPic.id)}
                        >
                            delete
                        </button>
                    </div>
                ) : (
                    <p>No selected picture to edit</p>
                )}
            </div>
        </div>
    );
};
