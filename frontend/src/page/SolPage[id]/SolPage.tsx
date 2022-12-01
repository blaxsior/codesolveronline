import CodeEditSection from '../../component/CodeEditSection/CodeEditSection';
import DescSection from '../../component/DescSection/DescSection';
import styles from '../page.module.css';

const SolPage: React.FC = (props) => {
    return (
        <div className={styles['page-layout']}>
            <DescSection title='hello' description='world!'/>
            <CodeEditSection/>
        </div>
    );
}

export default SolPage;