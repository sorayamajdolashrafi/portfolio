import PropTypes from 'prop-types';
import styles from '../../styles/projects.module.css';

const ProjectControls = ( { updateView, view } ) => {
        // a radio button that switches between gallery and list view

    return (
        <div className={styles.controls}>
            <label className={styles.switch}>
                <input type="checkbox" onChange={updateView} />
                <span className={styles.slider}></span>
            </label>
            {
                view ? <p>gallery view</p>
                : <p>grid view</p>
            }
        </div>
    )
}

ProjectControls.propTypes = {
    updateView: PropTypes.func.isRequired,
    view: PropTypes.bool.isRequired
}

export default ProjectControls;
