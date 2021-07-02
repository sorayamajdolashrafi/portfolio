import styles from '../../styles/about.module.css';
import Bio from './Bio';
import Portrait from './Portrait';
import Tech from './Tech';

const Moon = () => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon} data-testid="moon">
                <Bio />
                <Portrait />
                <Tech />
            </div>
        </div>
    )
}

export default Moon;