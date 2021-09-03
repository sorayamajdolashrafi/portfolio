import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/projects.module.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ProjectItem = ({ name, github, site, tech, tag, contributions, images, }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;
    
    const  previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    const  nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <li className={styles.project} key={name}>
            <div className={styles.front}>
                <h2>{name}</h2>
                <img src={images[0].src} alt={images[0].alt} />
                <p>{tag}</p>
            </div>

            <div className={styles.back}>
                <h2>{name}</h2>
                <h3>{tech}</h3>
                <div className={styles.carousel}>
                    
                    <button className={styles.arrows} onClick={previousImage}>
                        <ArrowLeftIcon fontSize="large"/>
                    </button>

                    {
                        current === 0 ?
                        <section className={styles.description}>
                            {contributions.map(text => (
                                <p>{text}</p>
                            ))}
                        </section>
                        : <img src={images[current].src} alt={images[current].alt} />
                    }
                    
                    <button className={styles.arrows} onClick={nextImage}>
                        <ArrowRightIcon  fontSize="large"/>
                    </button>
                    
                </div>
                <div className={styles.links}>
                    <a 
                        href={site} 
                        target="_blank"
                        aria-label="link to live site">
                            live
                    </a>
                    <a 
                        href={github} 
                        target="_blank"
                        aria-label="link to live site">
                            code
                    </a>
                </div>
            </div>
        </li>
    )
}

ProjectItem.propTypes = {

}

export default ProjectItem
