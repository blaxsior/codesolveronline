import { useState } from 'react';
import {ActionFunction} from 'react-router-dom';
import axios from 'axios';

import DescEditSection from '../../component/DescEditSection/DescEditSection';
import DescSection from '../../component/DescSection/DescSection';
import styles from '../page.module.css';

export const action : ActionFunction = async ({params, request}) => {
    const data = await request.formData();
    const result = await axios.post('/server/scoring', data);
    console.log(result.status);
    console.log(result.data);
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