import axios from 'axios';
import { useEffect } from 'react';
import { Form, LoaderFunction, useLoaderData } from 'react-router-dom';
import ProblemList from '../../component/ProblemList/ProblemList';
import { IProblemList } from '../../interfaces/Problem.interface';
import styles from './ListPage.module.css';

export const loader: LoaderFunction = async ({ request, params }) => {
    const p = (new URL(request.url)).searchParams;
    const pno = p.get('pno')??"0";
    let id = parseInt(pno);
    if (isNaN(id)) {
        id = 0;
    }

    // pno가 제대로 파싱되지 않는 경우 첫 페이지를 요구한다.
    // 맨 처음 페이지 방문할 때도 포함됨.
    try {
        const result = await axios.get(`/api/p/list/${id}`, {
            timeout: 3000 // 3초 안에 처리 안되면 에러로 처리됨
        });
        if (result.status !== 200) {
            return {pno,data: []};
        }
        else {
            return {pno,data:result.data};
        }
    }
    catch {
        return {pno,data: []};
    }
}

type IRet = {pno:string, data:IProblemList}

const ListPage: React.FC = (props) => {
    const {data,pno} = useLoaderData() as IRet;
    useEffect(() => {
        const pinput = document.getElementById('pno') as HTMLInputElement;
        pinput.value = pno;
    },[pno]);

    return <div className='page-layout'>
        <h1 className={styles['page-head']}>문제 검색</h1>
        <ProblemList items={data} />
        <Form id='search-form' role='search' className={styles['search']}>
            <label htmlFor='pno'>페이지 번호</label>
            <input name='pno' id='pno' type='number' min='0' />
            <button>이동</button>
        </Form>
    </div>;
}

export default ListPage;