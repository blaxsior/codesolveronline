import Navitem, { NavitemProps } from "./NavItem";
import styles from "./Navigation.module.css";

const nav_list: NavitemProps[] = [
    { name: '문제 목록', to: '/list' },
    { name: '문제 작성', to: '/create' }
]
// 내용 여기다가 추가!

const Navigation: React.FC = (props) => {
    return (
        <nav className="navigation">
            <ul className={styles['nav_list']}>
                {
                    nav_list.map(v => <Navitem name={v.name} to={v.to} key={v.to} />)
                }
            </ul>
        </nav>
    )
};

export default Navigation;