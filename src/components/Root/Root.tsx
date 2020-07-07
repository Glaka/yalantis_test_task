import React from 'react';
import { PicturesComponent } from '../PicturesComponent/';
import { PicturesEditComponent } from '../PicturesEditComponent/PicturesEditComponent';
// import { Provider, useDispatch } from 'react-redux';
// import { Route } from 'react-router';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import { HashRouter as Router } from 'react-router-dom';
// import NotFound from '../NotFound/NotFoundComponent';
// import MainComponent from '../MainComponent/MainComponent';
// import HeaderComponent from '../HeaderComponent/HeaderComponent';
// import ArchiveComponent from '../ArchiveComponent/ArchiveComponent';

const Root = ({ store }: any) => {
    return (
        <div className="app">
            <PicturesComponent />
            <PicturesEditComponent />
        </div>
    );
};

export default Root;
