import { ITestcase } from "../../interfaces/Testcase.interface";
import bs from './TCList.module.css';
import styles from './TCItem.module.css';
interface ITCItem {
    item: ITestcase;
    idx: number;
    onChange: (idx: number,
        type: 'input' | 'output' | 'type',
        e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemove: (idx: number, e: React.MouseEvent<HTMLButtonElement>) => void
}

const TCItem: React.FC<ITCItem> = ({ item, idx, onChange, onRemove }) => {

    return <span key={idx}
        className={styles['item-con']}>
        <span>
            <label htmlFor="testcases[][input]">입력</label>
            <input
                type="text"
                name="testcases[][input]"
                id="testcases[][input]"
                value={item.input}
                onChange={e => onChange(idx, 'input', e)} />
        </span>
        <span>
            <label htmlFor="testcases[][output]">출력</label>
            <input
                type="text"
                name="testcases[][output]"
                value={item.output}
                onChange={e => onChange(idx, 'output', e)} />
        </span>
        <span>
            <label htmlFor="testcases[][type]">타입</label>
            <input
                type="checkbox"
                name="testcases[][type]"
                // placeholder="T 또는 F로 표기"
                onChange={e => onChange(idx, 'type', e)} />
        </span>
        <button
            type="button"
            className={`${bs['btn']} ${bs['sub']}`}
            onClick={e => onRemove(idx, e)}>-</button>
    </span>;
    // 우선 분리 X
}

export default TCItem;