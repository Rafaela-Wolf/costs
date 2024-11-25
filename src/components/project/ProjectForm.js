

function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Name of the project"></input>
            </div>
            
            <div>
                <input type="number" placeholder="Orçamento total"></input>
            </div>
            
            <div>
                <select name="category_id">
                    <option disabled>Select the category</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Create project"></input>
            </div>
        </form>
    )
}

export default ProjectForm;