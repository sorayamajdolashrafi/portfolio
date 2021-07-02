import PropTypes from 'prop-types';
import styles from '../../styles/about.module.css';
import Bio from './Bio';
import Portrait from './Portrait';
import Tech from './Tech';

const Moon = props => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon}>
                <Bio />
                <Portrait />
                <Tech />
            </div>
        </div>
    )
}

Moon.propTypes = {

}

export default Moon;