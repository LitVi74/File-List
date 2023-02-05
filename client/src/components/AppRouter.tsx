import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route
                    path={path}
                    element={<Component />}
                    key={path}
                />
            )}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;