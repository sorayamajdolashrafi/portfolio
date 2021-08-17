import React from 'react';
import ProjectSlide from './ProjectSlide';
import styles from '../../styles/projects.module.css';

const ProjectGallery = () => {
    return (
        <div className={styles.gallery}>
            <h1>gallery</h1>
            <ProjectSlide />
        </div>
    )
}

export default ProjectGallery;
