import styles from "./SubmitBtn.module.css";

function SubmitBtn({text}) {
    return (
        <div className={styles.btn}>
            <button>{text}</button>
        </div>
    )
}

export default SubmitBtn;