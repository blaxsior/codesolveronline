import React from 'react';
import { Form } from 'react-router-dom';
import TCList from '../TCList/TCList';
import styles from './DescEditSection.module.css';

interface IDescSect {
    onTitleChange: (str: string) => void,
    onDescChange: (str: string) => void
}

const DescEditSection: React.FC<IDescSect> = (props) => {
    const descChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>
        = (e) => {
            props.onDescChange(e.target.value);
        };

    const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement>
        = (e) => {
            props.onTitleChange(e.target.value);
        };

    return (
        <section className={styles['desc_sect']}>
            <Form method='post'>
                <div className={styles['grid-container']}>
                    <label htmlFor='title'>제목</label>
                    <input id='title' name='title' onChange={titleChangeHandler} />
                    <label htmlFor='description'>내용</label>
                    <textarea
                        id='description'
                        name='description'
                        className={styles['text-box']}
                        spellCheck='false'
                        onChange={descChangeHandler} />
                </div>
                    <TCList />
                <button className={`button`}
                    type="submit">제출하기</button>
            </Form>
        </section>
    );
}

export default DescEditSection;