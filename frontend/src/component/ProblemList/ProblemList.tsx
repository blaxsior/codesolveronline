import { IProblemList } from '../../interfaces/Problem.interface';
import ProblemItem from './ProblemItem';
import styles from './ProblemList.module.css';


const ProblemList: React.FC<{items: IProblemList}> = ({items}) => {
    return (
        <div className={styles['container']}>
            <ul className={styles['list']}>
                {items.map(item => {
                    return <ProblemItem {...item} key={item.id}/>
                })}
                {items.length === 0 &&<div>문제를 찾을 수 없습니다!</div>}
            </ul>
        </div>
    );
};

export default ProblemList;