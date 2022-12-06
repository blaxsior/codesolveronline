import { useState } from 'react';
import { ActionFunction } from 'react-router-dom';
import axios from 'axios';

import DescEditSection from '../../component/DescEditSection/DescEditSection';
import DescSection from '../../component/DescSection/DescSection';
import styles from '../page.module.css';

export const action: ActionFunction = async ({ request, params }) => {
    const data = (await request.formData()).entries();
    const darr = [...data] as string[][];
    const urlparams = new URLSearchParams(darr).toString();
    console.log(urlparams);
    const result = await axios.post('/api/create', urlparams, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    });

    console.log(result.status);
    console.log(result.data);

    return null;
}

const CreatePage: React.FC = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const titleChange = (str: string) => {
        setTitle(str);
    }

    const descChange = (str: string) => {
        setDesc(str);
    }

    return (
        <div className={styles['page-layout']}>
            <DescSection title={title} description={desc} />
            <DescEditSection
                onDescChange={descChange}
                onTitleChange={titleChange} />
        </div>
    );
}

export default CreatePage;