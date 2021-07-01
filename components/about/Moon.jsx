import PropTypes from 'prop-types';
import styles from '../../styles/about.module.css';
import Bio from './Bio';
import Tech from './Tech';

const Moon = props => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon}>
                <Bio />
                <figure>
                    <img src='1.png' alt='black and white photobooth portrait of soraya' />
                    <img src='2.png' alt='black and white photobooth portrait of soraya' />
                    <img src='3.png' alt='black and white photobooth portrait of soraya' />
                    <img src='4.png' alt='black and white photobooth portrait of soraya' />
                </figure>
                <Tech />
            </div>
        </div>
    )
}

Moon.propTypes = {

}

export default Moon
