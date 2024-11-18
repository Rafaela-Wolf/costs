import styles from './Home.module.css';
// import savings form '../../img/savings.svg';
import LinkButton from '../layouts/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Create project" />
            {/* <img src={savinfs} alt="Savings"></img> */}
        </section>
    )
};

export default Home;