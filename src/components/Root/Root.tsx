import React from 'react';
import { PicturesComponent } from '../PicturesComponent/';
import { PicturesEditComponent } from '../PicturesEditComponent/';
import { Header } from '../Header/Header';

const Root: React.FC = () => {
    return (
        <main>
            <PicturesComponent />
            <Header />
            <PicturesEditComponent />
        </main>
    );
};

export default Root;
