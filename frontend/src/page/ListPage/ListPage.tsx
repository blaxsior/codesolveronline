import axios from 'axios';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import ProblemList from '../../component/ProblemList/ProblemList';
import { IProblemList } from '../../interfaces/Problem.interface';
import styles from './ListPage.module.css';

const loader : LoaderFunction = async ({request,params}) => {
    const id = params['id'];
    const result = await axios.get(`/problems/${id}`,{
        timeout: 3000
    });

    if(result.status !== 200)
    {
        return [];
    }
    else{
        return result.data;
    }
}

type IRet = IProblemList

const ListPage : React.FC = (props) => {
    const data = useLoaderData() as IRet;
    
    return <div className='page-layout'>
        <h1 className={styles['page-head']}>문제 검색</h1>
        <ProblemList items={[{id:1, title:"hello!"}]}/>
    </div>;
}

export default ListPage;