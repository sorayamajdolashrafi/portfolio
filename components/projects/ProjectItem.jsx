import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '../../styles/projects.module.css';
import Moon from './Moon.jsx';
import Beam from './Beam.jsx';
import Shadow from './Shadow.jsx';
import Carousel from './Carousel.jsx';

const ANIMATION_SPEED = .3;

const ProjectItem = ({ name, github, site, tech, tag, description, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [expand, setExpand] = useState(false)
    
    const  previousImage = () => {
        // allowing the index to be set > 0 is required for 
        // the react-responsive-carousel seamless infinite scroll
        setCurrentIndex(currentIndex -1)
    }
    
    const  nextImage = () => {
        // allowing the index to be set > 0 is required for 
        // the react-responsive-carousel seamless infinite scroll
        setCurrentIndex(currentIndex + 1)
    }

    const handleExpand = () => {
        setExpand(!expand)
    }

    const handleImageChange = (index) => {
        if(currentIndex !== index) {
            setCurrentIndex(index)
        } 
    }

    return (
        <motion.li className={styles.project} layout>

            <AnimatePresence 
                key={`project ${name}`}
                initial={false}
            >
                <motion.div
                    key="moon"
                    animate={ 
                        expand ? 
                        { opacity: 0, height: 0 } 
                        : { opacity: 1, height: 'auto' }
                    }
                    transition={{ duration: ANIMATION_SPEED }}
                >
                    <Moon 
                        name={name} 
                        tech={tech} 
                        tag={tag} 
                        expand={expand}
                    />  
                </motion.div>
            </AnimatePresence>


                <Carousel 
                    images={images}
                    currentIndex={currentIndex} 
                    handleChange={handleImageChange} 
                />

            <AnimatePresence       
                key={`${name} detail`}
                initial={false}
            > {
                expand &&
                <motion.section
                key={`${name} detail`}
                className={styles.open}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: ANIMATION_SPEED }}   
                >
                    <Beam 
                        images={images} 
                        currentIndex={currentIndex} 
                        previousImage={previousImage} 
                        nextImage={nextImage} 
                        name={name}
                        tech={tech} 
                        description={description}
                        expand={expand}
                        handleChange={handleImageChange}
                        />
                </motion.section>
            } </AnimatePresence>

                <Shadow 
                    key="shadow"
                    site={site}
                    handleExpand={handleExpand}
                    github={github}
                    expand={expand}
                />
    
        </motion.li>
    )
}

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }))
}

export default ProjectItem;
