import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitBtn from '../form/SubmitBtn';

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Name of the project"  
                name="name" 
                placeholder="Insira o nome do projeto"
            />

            <Input 
                type="number" 
                text="Orçamento do projeto"  
                name="budget" 
                placeholder="Insira o orçamento total"
            />
            
            <Select 
                name="category_id"
                text="Select the category"
            />

            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ProjectForm;