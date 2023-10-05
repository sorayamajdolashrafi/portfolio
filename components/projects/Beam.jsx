import styles from '../../styles/projects.module.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Beam = ({previousImage, nextImage, tech, description}) => {
  return (
    <section className={styles.beam}>

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
          {description.map((text, i) => (
              <p key={i}>{text}</p>
          ))}
      </div>
            
    </section>
  )
}

export default Beam;