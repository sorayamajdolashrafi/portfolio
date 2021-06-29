import PropTypes from 'prop-types';
import styles from '../../styles/index.module.css';

const Welcome = props => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon}>
                <h1>wut up rat bastards</h1>
            </div>
        </div>
    )
}

Welcome.propTypes = {

}

export default Welcome;
