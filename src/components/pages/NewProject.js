import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router-dom';

function NewProject() {

    const history = useNavigate();

    function createPost(project) {

        // INITIALIZE COST AND SERVICES
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                history.push('/projects', {message: 'Projeto criado com sucesso'})
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Crie seus projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}

export default NewProject;