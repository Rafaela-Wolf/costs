import { useState } from 'react';
import Input from '../form/Input';
import SubmitBtn from '../form/SubmitBtn';
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({});

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name] : e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Service name"
                name="name"
                placeholder="Enter service name"
                handleOnChange={handleChange}
            />

            <Input
                type="number"
                text="Service cost"
                name="cost"
                placeholder="Enter the total amount"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Service description"
                name="description"
                placeholder="Enter the service description"
                handleOnChange={handleChange}
            />

            <SubmitBtn text={btnText} />
        </form>
    )
}

export default ServiceForm;