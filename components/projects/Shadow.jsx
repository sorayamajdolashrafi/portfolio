import styles from '../../styles/projects.module.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Shadow = ({site, handleExpand, github, expand}) => {
  return (
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
  )
}

export default Shadow
