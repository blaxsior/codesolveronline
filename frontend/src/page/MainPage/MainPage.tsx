import axios from 'axios';
import { useEffect } from 'react';
import styles from './MainPage.module.css';

const MainPage: React.FC = (props) => {
    return (
        <div className="page-layout">
            <img className={styles['logo']} 
            src='/cso_logo.png'
            alt='code solver online page logo'/>
            <div>
                <p>
                    온라인 기반 코딩 문제 풀이 시스템
                </p>
            </div>
        </div>);
}

export default MainPage;