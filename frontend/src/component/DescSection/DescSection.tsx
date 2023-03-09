import React, { useDeferredValue } from 'react';
import styles from './DescSection.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface IDescSect {
    title: string;
    description: string;
}

const DescSection: React.FC<IDescSect> = (props) => {
    const description = useDeferredValue(props.description);

    return (
        <section className={styles['des_sect']}>
            <h1 className={styles['title']}>{props.title}</h1>
            <ReactMarkdown className={`${styles['mkdn']} markdown-body`}
            remarkPlugins={[remarkGfm]}>
                {description}
            </ReactMarkdown>
        </section>
    )
}

export default DescSection;