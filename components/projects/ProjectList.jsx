import ProjectItem from './ProjectItem.jsx';
import styles from '../../styles/projects.module.css';


const ProjectList = () => {
    return (
        <div className={styles.grid}>
            <h1>list</h1>
            <ProjectItem />
        </div>
    )
}


export default ProjectList;
