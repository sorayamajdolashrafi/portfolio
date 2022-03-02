import styles from '../../styles/projects.module.css';

const Moon = ({name, tag, tech }) => {
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

export default Moon;
