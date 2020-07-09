import React from 'react';
import { PicturesComponent } from '../PicturesComponent/';
import { PicturesEditComponent } from '../PicturesEditComponent/';

const Root: React.FC = () => {
    return (
        <main>
            <PicturesComponent />
            <PicturesEditComponent />
        </main>
    );
};

export default Root;
