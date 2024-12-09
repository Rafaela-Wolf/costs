import styles from './Loading.module.css';
// import img loadi from '../../img/loading.svg';

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src='placeholder' alt="Loading"></img>
        </div>
    )
}

export default Loading;