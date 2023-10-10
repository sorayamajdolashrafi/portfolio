import PropTypes from 'prop-types';
import styles from '../../styles/projects.module.css';

const Moon = ({ name, tag, tech }) => {
  return (
    <div className={styles.moon}>
        <h2>{name}</h2>
        
        <div className={styles.tagWrapper}>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.tech}>{tech}</p>
        </div>
    </div>
  )
}

Moon.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired
}

export default Moon;
