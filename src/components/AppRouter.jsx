import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;