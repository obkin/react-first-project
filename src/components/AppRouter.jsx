import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../router/routes';

const AppRouter = () => {
    return (
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