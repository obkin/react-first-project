import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Error from '../pages/Error';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;