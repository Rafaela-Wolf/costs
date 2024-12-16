import styles from './Loading.module.css';
import imgLoading from '../../assets/images/loading.svg';

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={imgLoading} alt="Loading" />
        </div>
    )
}

export default Loading;