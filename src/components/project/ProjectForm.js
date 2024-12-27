import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitBtn from '../form/SubmitBtn';

import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || []);

    useEffect(() => {
        fetch(`${API_URL}/categories`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err));
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Project name"  
                name="name" 
                placeholder="Enter the project name"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />

            <Input 
                type="number" 
                text="Project budget"  
                name="budget" 
                placeholder="Enter the project budget"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            
            <Select 
                name="category_id"
                text="Select the category"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ProjectForm;