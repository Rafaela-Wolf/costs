import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Crie seus projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Create Project"/>
        </div>
    )
}

export default NewProject;