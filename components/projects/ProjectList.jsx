import ProjectItem from './ProjectItem.jsx';
import styles from '../../styles/projects.module.css';
import projects from './projects.json';


const ProjectList = () => {
    return (
        <ul className={styles.projects}>
            {
                projects.map((project) => (
                    <ProjectItem  key={project.name} {...project}/>))
            }
        </ul>
    )
}


export default ProjectList;
