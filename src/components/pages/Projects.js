import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";

function Projects() {

    const location = useLocation();
    let message = '';
    if(location.message) {
        message = location.state.message
    };

    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    )
};

export default Projects;