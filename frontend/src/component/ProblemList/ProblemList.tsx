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
            </ul>
        </div>
    );
};

export default ProblemList;