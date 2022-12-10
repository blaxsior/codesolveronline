import axios from 'axios';
import { ActionFunction, LoaderFunction, redirect, useActionData, useLoaderData } from 'react-router-dom';
import CodeEditSection from '../../component/CodeEditSection/CodeEditSection';
import DescSection from '../../component/DescSection/DescSection';
import { ISolProblem } from '../../interfaces/Problem.interface';
import styles from '../page.module.css';

export const loader: LoaderFunction = async ({ params }) => {
    const id = params['id'];
    try {
        const result = await axios.get(`/api/p/problem/${id}`);
        if (result.status === 200) {
            return result.data;
        }
    }
    catch {
        return redirect('/');
    }

    return redirect('/');
};

// export const action: ActionFunction = async ({ request }) => {
//     const data = (await request.formData()).entries();
//     const darr = [...data] as string[][];
//     const urlparams = new URLSearchParams(darr).toString();

//     try {
//         const result = await axios.post('/api/p/score', urlparams, {
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//             }
//         });

//         console.log(result.data);
//         return result.data;
//     }
//     catch {
//         return {message: "에러 발생!"};
//     }
// }



const SolPage: React.FC = (props) => {
    const pdata = useLoaderData() as ISolProblem;
    return (
        <div className={styles['page-layout']}>
            <DescSection title={pdata.title} description={pdata.description} />
            <CodeEditSection initcodes={pdata.initCodes} pid={pdata.id} />
        </div>
    );
}

export default SolPage;