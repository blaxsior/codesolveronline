import { useState } from 'react';
import DescEditSection from '../../component/DescEditSection/DescEditSection';
import DescSection from '../../component/DescSection/DescSection';
import styles from './CreatePage.module.css';

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