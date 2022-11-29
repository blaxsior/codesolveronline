import React from 'react';
import styles from './DescSection.module.css';
import ReactMarkdown from 'react-markdown';

interface IDescSect {
    title: string;
    description: string;
}

const DescSection: React.FC<IDescSect> = (props) => {
    return (
        <section className={styles['des_sect']}>
            <h1 className={styles['title']}>{props.title}</h1>
            <ReactMarkdown className={styles['mkdn']}>
                {props.description}
            </ReactMarkdown>
        </section>
    )
}

export default DescSection;