import PropTypes from 'prop-types';
import styles from '../../styles/about.module.css';

const Bio = props => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon}>
                <p>I'm Soraya, a full-stack software engineer with a background as a visual artist who adores interactive storytelling and accessible design.
                </p>
            </div>
        </div>
    )
}

Bio.propTypes = {

}

export default Bio;
