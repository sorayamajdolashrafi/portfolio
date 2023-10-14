import styles from '../../styles/projects.module.css';
import ProjectItem from './ProjectItem.jsx';
import projects from './projects.json';

const ProjectList = () => {
    return (
        <ul 
            className={styles.projects}
            >
            {
                projects.map((project) => (
                    <ProjectItem key={project.name} {...project} />))
                }
        </ul>
    )
}

export default ProjectList;
