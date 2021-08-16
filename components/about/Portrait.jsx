import PropTypes from 'prop-types';
import styles from '../../styles/about.module.css';

const Portrait = props => {
    return (
        <section className={styles.portrait}>
            <img src='soraya.jpg' alt='black and white photobooth strip with 4 portraits of soraya' />  
        </section>
    )
}

Portrait.propTypes = {

}

export default Portrait;

{/* <img src='4.png' alt='black and white photobooth portrait of soraya' /> */}