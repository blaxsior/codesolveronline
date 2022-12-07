import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import CreatePage, {action as createPageAction} from './page/CreatePage/CreatePage';
import ListPage, {loader as listPageLoader} from './page/ListPage/ListPage';
import MainPage from './page/MainPage/MainPage';
import SolPage, {loader as solPageLoader, action as solPageAction} from './page/SolPage[id]/SolPage';



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
                element: <SolPage />,
                loader: solPageLoader,
                action: solPageAction
            },
            {
                path:'create',
                element: <CreatePage/>,
                action: createPageAction
            },
            {
                path:'list',
                element: <ListPage/>,
                loader: listPageLoader
            }
        ]
    }
]);

export default browserRouter;