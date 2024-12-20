import { BsFillTrashFill } from 'react-icons/bs';
import styles from './ServiceCard.module.css';

function ServiceCard({ id, name, cost, description, handleRemove }) {

    function remove(e) {
        e.preventDefault();
        handleRemove(id, cost);
    }

    return (
        <div className={styles.service_container}>
            <div className={styles.service_card}>
                <h4>{name}</h4>
                <p><span>Total cost:</span> ${cost}</p>
                <p>{description}</p>

                <div className={styles.service_btn}>
                    <button onClick={remove}>
                        <BsFillTrashFill /> Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;