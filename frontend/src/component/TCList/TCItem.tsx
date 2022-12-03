import { ITestcase } from "../../interfaces/Testcase.interface";
import bs from './TCList.module.css';
import styles from './TCItem.module.css';
import React from "react";
interface ITCItem {
    item: ITestcase;
    idx: number;
    onChange: (idx: number,
        type: 'input' | 'output' | 'type',
        e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>) => void;
    onRemove: (idx: number, e: React.MouseEvent<HTMLButtonElement>) => void
}

const TCItem: React.FC<ITCItem> = ({ item, idx, onChange, onRemove }) => {

    return <span key={idx}
        className={styles['item-con']}>
        <span>
            <label htmlFor={`testcases[${idx}][input]`}>입력</label>
            <input
                type="text"
                name={`testcases[${idx}][input]`}
                id={`testcases[${idx}][input]`}
                value={item.input}
                onChange={e => onChange(idx, 'input', e)} />
        </span>
        <span>
            <label htmlFor={`testcases[${idx}][output]`}>출력</label>
            <input
                type="text"
                name={`testcases[${idx}][output]`}
                value={item.output}
                onChange={e => onChange(idx, 'output', e)} />
        </span>
        <span>
            <label htmlFor={`testcases[${idx}][type]`}>타입</label>
            <select 
            name={`testcases[${idx}][type]`} 
            onChange={e => onChange(idx, 'type', e)}>
                <option value='true'>true</option>
                <option value='false'>false</option>
            </select>
        </span>
        <button
            type="button"
            className={`${bs['btn']} ${bs['sub']}`}
            onClick={e => onRemove(idx, e)}>-</button>
    </span>;
    // 우선 분리 X
}

export default TCItem;