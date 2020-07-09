import * as React from 'react';
import { useDispatch } from 'react-redux';
import { editPicture } from '../../reducers/pictures/actions';
import { getTooltipPos } from '../../helpers/utils';
export const Picture = ({ picture }: any) => {
    const dispatch = useDispatch();
    const tooltipStyle = {
        backgroundColor: picture.color,
        ...getTooltipPos(picture.position),
    };
    return (
        <div
            className="grid-item "
            onClick={() => dispatch(editPicture(picture))}
        >
            <div
                className="grid-item_content"
                style={{ backgroundImage: `url(${picture.image})` }}
            >
                <p className="tooltip" style={tooltipStyle}>
                    {picture.text}
                </p>
            </div>
        </div>
    );
};
