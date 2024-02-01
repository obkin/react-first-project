import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context/context';

const AppRouter = () => {
    const {isUserAuthorized, setIsUserAuthorized} = useContext(AuthContext);
    console.log(isUserAuthorized);

    return (
        isUserAuthorized
        ? 
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
        : 
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;