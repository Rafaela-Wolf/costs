import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {

        // INITIALIZE COST AND SERVICES
        project.cost = 0
        project.services = []

        fetch(`${API_URL}/projects`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/projects', {message: 'Project created successfully'})
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your projects first, then add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}

export default NewProject;