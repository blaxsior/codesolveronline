import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import CreatePage from './page/CreatePage/CreatePage';
import ListPage from './page/ListPage/ListPage';
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
            },
            {
                path:'create',
                element: <CreatePage/>
            },
            {
                path:'list',
                element: <ListPage/>
            }
        ]
    }
]);

export default browserRouter;