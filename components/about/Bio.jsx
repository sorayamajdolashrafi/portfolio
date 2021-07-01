import PropTypes from 'prop-types';
import styles from '../../styles/about.module.css';

const Bio = props => {
    return (
        <section className={styles.bio}>
            <h2>oh, hello!</h2>
            <p className={styles.p1}>
                I'm a full-stack software engineer with a background as a visual artist, crafting worlds is my jam.
            </p>
            <p className={styles.p2}>
                I adore interactive storytelling and love weaving together different skills to bring those stories to life. Getting to do that with a rad team is even better.
            </p>
        </section>
    )
}

Bio.propTypes = {

}

export default Bio;
