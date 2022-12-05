import React, { useState } from 'react';
import { ITestcase } from '../../interfaces/Testcase.interface';
import TCItem from './TCItem';
import styles from './TCList.module.css';

interface ITCListProps {
    testcases?: ITestcase[];
}

const TCList: React.FC<ITCListProps> = (props) => {
    const [testcases, setTestCases] = useState<ITestcase[]>(props.testcases ?? []);
    const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const init_TC: ITestcase = {
            input: '',
            output: '',
            type: ''
        };

        setTestCases(prev => [...prev, init_TC]);
    };

    const remHandler = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //idx 위치에서 하나 제거.
        if(testcases.length <= 1)
        {
            return;
        }
        setTestCases(prev => {
            const cur = [...prev];
            cur.splice(idx, 1);
            return cur;
        });
    };

    const valueHandler = (idx: number, 
        type: 'input' | 'output' | 'type', 
        e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>) => {
        const data = [...testcases];
        data[idx][type] = e.target.value;
        setTestCases(data);
    }

    return (
        <div>
            <div className={styles['ilist']}>
                <legend>케이스</legend>
                
                <button
                    className={`${styles['btn']}
            ${styles['add']}`}
                    onClick={e => addHandler(e)}
                    type='button'>+</button>
            </div>

            <div className={styles['items']}>
                {testcases.map((data, idx) =>
                    <TCItem key={idx}
                        item={data}
                        idx={idx}
                        onChange={valueHandler}
                        onRemove={remHandler} />
                )}
            </div>
        </div>
    );
}

export default TCList;