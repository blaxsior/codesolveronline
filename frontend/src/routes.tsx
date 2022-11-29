import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import MainPage from './page/MainPage/MainPage';
import SolPage from './page/SolPage[id]/SolPage';



const browserRouter = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <MainPage/>
            },
            {
                path:'solve/:id',
                element: <SolPage />
            }
        ]
    }
]);

export default browserRouter;