import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import MainPage from './page/MainPage/MainPage';



const browserRouter = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <MainPage/>
            }
        ]
    }
]);

export default browserRouter;