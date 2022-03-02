import { useState } from 'react';
import styles from '../../styles/projects.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import Moon from './Moon.jsx';
import Beam from './Beam.jsx';
import Shadow from './Shadow.jsx';
import Carousel from './Carousel.jsx';

const ProjectItem = ({ name, github, site, tech, tag, description, images, }) => {
    const [current, setCurrent] = useState(0);
    const [expand, setExpand] = useState(false);
    const length = images.length;
    
    const  previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    const  nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const handleExpand = () => {
        setExpand(!expand)
        setCurrent(0)
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
                        tag={tag} />
                </motion.div>

                <Carousel images={images} current={current}/>

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
                        current={current} 
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
                    expand={expand}/>

            </AnimatePresence>
        </li>
    )
}

ProjectItem.propTypes = {

}

export default ProjectItem
