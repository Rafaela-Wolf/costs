import styles from "./SubmitBtn.module.css";

function SubmitBtn({text}) {
    return (
        <div className={styles.div_btn}>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitBtn;