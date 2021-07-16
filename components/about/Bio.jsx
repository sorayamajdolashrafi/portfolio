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
            <p className={styles.p3}>
                Right now I'm really into learning about how to make the internet accesible. Off the internet I'm learning how to actually weave tiny carpets.
            </p>

            <div className={styles.p4}>
                <p>
                    You can reach me at
                </p>
                <a href="mailto:hello@sorayabenson.com" target="_blank">hello@sorayabenson.com</a>
            </div>
        </section>
    )
}

Bio.propTypes = {

}

export default Bio;
