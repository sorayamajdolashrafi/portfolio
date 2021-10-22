import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/projects.module.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ProjectItem = ({ name, github, site, tech, tag, description, images, }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;
    
    const  previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    const  nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <li className={styles.project}>
            <div className={styles.moon}>
                <h2>{name}</h2>
                <p className={styles.frontText}>{tag}</p>
                <p className={styles.backText}>{tech}</p>
            </div>

            <section className={styles.beam}>
                <div className={styles.front}>
                    <img src={images[0].src} alt={images[0].alt} />
                </div>

                <div className={styles.back}>
                    <div className={styles.arrowWrapper}>
                        <button className={styles.arrows} onClick={previousImage}>
                            <ArrowLeftIcon fontSize="large"/>
                        </button>
                        <button className={styles.arrows} onClick={nextImage}>
                            <ArrowRightIcon  fontSize="large"/>
                        </button>
                    </div>
                    <div className={styles.carousel}>
                        {
                            current === 0 ?
                            <section className={styles.description}>
                                {description.map(text => (
                                    <p>{text}</p>
                                ))}
                            </section>
                            : <img src={images[current].src} alt={images[current].alt} />
                        }
                    </div>
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
            </section>
        </li>
    )
}

ProjectItem.propTypes = {

}

export default ProjectItem
