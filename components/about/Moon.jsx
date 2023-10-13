import styles from '../../styles/about.module.css';
import Bio from './Bio';
import Portrait from './Portrait';
import Tech from './Tech';
import MiniPortrait from './MiniPortrait';

const Moon = () => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon} data-testid="moon">
                <div className={styles.craterWrapper}>
                    <MiniPortrait />
                    <Bio />
                    <Portrait />
                    <Tech />
                </div>
            </div>
        </div>
    )
}

export default Moon;
