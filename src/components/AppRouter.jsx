import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
    const [isUserAuthorized, setIsUserAuthorized] = useState(true);

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