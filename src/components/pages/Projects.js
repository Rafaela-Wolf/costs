import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
import styles from "./Projects.module.css";
import Container from "../layouts/Container";
import LinkButton from "../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function Projects() {

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';
    if (location.message) {
        message = location.state.message
    };

    useEffect(() => {
        setTimeout(() => {
            fetch(`${API_URL}/projects`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err));
        }, 300)
    }, [])

    function removePoject(id) {
        fetch(`${API_URL}/projects/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage('Project removed!')
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My Projects</h1>
                <LinkButton to="/newproject" text="Create Project" />
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removePoject}
                        />
                    ))}
                {removeLoading}
            </Container>
        </div>
    )
};

export default Projects;