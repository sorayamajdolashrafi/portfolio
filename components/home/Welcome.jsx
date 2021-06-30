import PropTypes from 'prop-types';
import styles from '../../styles/index.module.css';

const Welcome = props => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon}>
                <h2>hi.</h2>
                <h2>software engineer here.</h2>
            </div>
        </div>
    )
}

Welcome.propTypes = {

}

export default Welcome;
