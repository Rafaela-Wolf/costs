import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
import styles from "./Projects.module.css";
import Container from "../layouts/Container";
import LinkButton from  "../layouts/LinkButton"

function Projects() {

    const location = useLocation();
    let message = '';
    if (location.message) {
        message = location.state.message
    };

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Create Project"/>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Projetos</p>
            </Container>
        </div>
    )
};

export default Projects;