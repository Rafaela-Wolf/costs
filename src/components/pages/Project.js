import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Project.module.css';

import Loading from '../layouts/Loading';
import Container from '../layouts/Container';
import Message from '../layouts/Message';

import ProjectForm from '../project/ProjectForm';

import ServiceForm from '../services/ServiceForm';
import ServiceCard from '../services/ServiceCard';

import { v4 as uuidv4 } from 'uuid';

function Project() {

    const { id } = useParams();

    const [project, setProject] = useState([]);
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch((err) => console.log(err));
        }, 300)
    }, [id])

    function editPost(project) {

        setMessage("");

        if (project.budget < project.cost) {
            setMessage("The budget cannot be lower than the project cost!");
            setType("error");
            return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
                setShowProjectForm(false);
                setMessage("Project updated!");
                setType("success");
            })
            .catch((err) => console.log(err));
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }

    function createService(project) {

        setMessage("");

        const lastService = project.services[project.services.lenght - 1];

        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost;

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if (newCost > parseFloat(project.budget)) {
            setMessage('Budget exceeded, please check the service value.');
            setType('error');
            project.services.pop();
            return false;
        }

        project.cost = newCost;

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false);
            })
            .catch((err) => console.log(err));
    }

    function removeService(id, cost) {
        const servicesUpdate = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project;

        projectUpdated.services = servicesUpdate;
        projectUpdated.cost = parseFloat(projectUpdated);

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdate)
                setMessage("Service successfully removed!")
            })
            .catch((err) => console.log(err));
    }

    return <>
        {project.name ?
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
                    <div className={styles.details_container}>
                        <h1>Project: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Edit project' : 'Close'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p><span>Category:</span> {project.category.name}</p>
                                <p><span>Total budget:</span> ${project.budget}</p>
                                <p><span>Total used:</span> ${project.cost}</p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm handleSubmit={editPost} btnText="Finish edit" projectData={project} />
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Add a service:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Add service' : 'Close'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <ServiceForm 
                                    handleSubmit={createService}
                                    btnText="Add service"
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Services</h2>
                    <Container customClass="start">
                        {services.length > 0 && 
                            services.map((service) => (
                                <ServiceCard 
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                            ))
                        }
                        {services.length === 0 && <p>No services registered.</p>}
                    </Container>
                </Container>
            </div> 
            : (
                <Loading />
            )}
    </>
}

export default Project;