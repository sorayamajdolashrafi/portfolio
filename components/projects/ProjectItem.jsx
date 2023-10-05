import { useState } from 'react';
import styles from '../../styles/projects.module.css';
import { AnimatePresence, motion } from 'framer-motion';

import Moon from './Moon.jsx';
import Beam from './Beam.jsx';
import Shadow from './Shadow.jsx';
import Carousel from './Carousel.jsx';

const ProjectItem = ({ name, github, site, tech, tag, description, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expand, setExpand] = useState(false);
    
    const  previousImage = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }
    
    const  nextImage = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    const handleExpand = () => {
        setExpand(!expand)
        setCurrentIndex(0)
    }

    const handleImageChange = (index) => {
        if(currentIndex !== index) {
            setCurrentIndex(index)
        } 
    }

    return (
        <li className={styles.project}>

            <AnimatePresence initial={false}>
                <motion.div
                    key="moon"
                    // initial={true}
                    animate={ expand ? 
                        { opacity: 0, height: 0 } 
                        : { opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <Moon 
                        name={name} 
                        tech={tech} 
                        tag={tag} 
                    />
                </motion.div>


                <Carousel 
                    images={images}
                    currentIndex={currentIndex} 
                    handleChange={handleImageChange} 
                />

                <motion.section
                    key="beam"
                    className={styles.open}
                    // initial={false}
                    animate={ expand ? 
                        { opacity: 1, height: 'auto' } 
                        : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}   
                >
                    <Beam 
                        images={images} 
                        current={currentIndex} 
                        previousImage={previousImage} 
                        nextImage={nextImage} 
                        tech={tech} 
                        description={description}
                        expand={expand}
                    />
                </motion.section>

                <Shadow 
                    key="shadow"
                    site={site}
                    handleExpand={handleExpand}
                    github={github}
                    expand={expand}
                />

            </AnimatePresence>
        </li>
    )
}

ProjectItem.propTypes = {

}

export default ProjectItem
