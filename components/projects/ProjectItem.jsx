import { useState } from 'react';
import styles from '../../styles/projects.module.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            {
                !expand &&
                <div className={styles.moon}>
                    <h2>{name}</h2>
                    
                    <div className={styles.tagWrapper}>
                        <p className={styles.tag}>{tag}</p>
                        <p className={styles.tech}>{tech}</p>
                    </div>
                </div>
            }
            <section className={styles.beam}>
                    <div className={styles.carousel}>
                        <img src={images[current].src} alt={images[current].alt} />
                    </div>

                     <div className={expand? styles.open : styles.closed}>
                        <div className={styles.arrowWrapper}>
                            <button className={styles.arrows} onClick={previousImage}>
                                <ArrowLeftIcon fontSize="large"/>
                            </button>
                            <button className={styles.arrows} onClick={nextImage}>
                                <ArrowRightIcon  fontSize="large"/>
                            </button>
                        </div>
                    <p className={styles.tech}>{tech}</p>
                        <div className={styles.description}>
                            {description.map(text => (
                                <p>{text}</p>
                            ))}
                        </div>
                    </div>
            
                    <div className={styles.links}>
                        <a 
                            href={site} 
                            target="_blank"
                            aria-label="link to live site">
                                live
                        </a>
                        {
                            expand
                            ? <button onClick={handleExpand}><ExpandLessIcon /></button>
                            : <button onClick={handleExpand}><ExpandMoreIcon /></button>
                        }
                        <a 
                            href={github} 
                            target="_blank"
                            aria-label="link to live site">
                                code
                        </a>
                    </div>
            </section>
        </li>
    )
}

ProjectItem.propTypes = {

}

export default ProjectItem
