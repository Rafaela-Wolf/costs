import styles from './Home.module.css';
import savings from '../../assets/images/savings.png';
import LinkButton from '../layouts/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton to="/newproject" text="Create project" />
            <img src={savings} alt="Savings"></img>
        </section>
    )
};

export default Home;