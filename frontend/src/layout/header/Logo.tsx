import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo: React.FC = (props) => {
    return (
        <h1>
            <Link to='/' className={styles.logo}>
                <div className={styles.logo_text}>codeSolverOnline</div>
            </Link>
        </h1>
    )
};

export default Logo;