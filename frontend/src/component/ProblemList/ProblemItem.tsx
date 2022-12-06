import { Link } from 'react-router-dom';
import { IProblemItem } from '../../interfaces/Problem.interface';
import styles from './ProblemItem.module.css';

const ProblemItem: React.FC<IProblemItem> = (props) => {
    return (<li className={styles['item']}>
        <Link to={`/solve/${props.id}`} className={styles['title']}>
            <div>{props.title}</div>
        </Link>
    </li>)
};

export default ProblemItem;