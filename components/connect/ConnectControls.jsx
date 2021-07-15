import PropTypes from 'prop-types';
import styles from '../../styles/connect.module.css';
import Link from 'next/link';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import TwitterIcon from '@material-ui/icons/Twitter';

const ConnectControls = ({ handleOpenEmail }) => {
    return (
        <ul className={styles.connect}>
            <li>
                <button 
                    onClick={handleOpenEmail}
                    aria-label="open email form"
                    className={styles.buttons}
                    >
                        <EmailIcon fontSize="large"/>
                </button>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/soraya-benson/" 
                    role="button"
                    target="_blank"
                    aria-label="link to linkedin"
                    className={styles.buttons}
                    >
                    <LinkedInIcon fontSize="large"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/sorayabenson" 
                    role="button"
                    target="_blank"
                    aria-label="link to github"
                    className={styles.buttons}
                    >
                    <GitHubIcon fontSize="large"/>
                </a>
            </li>
            <li>
                <a href="/resume"
                    aria-label="a to resume"
                    className={styles.buttons}
                    >
                    <DescriptionIcon fontSize="large"/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/sorayamajd" 
                    role="button"
                    target="_blank"
                    aria-label="link to twitter"
                    className={styles.buttons}
                    >
                    <TwitterIcon fontSize="large"/>
                </a>
            </li>
        </ul>
    )
}

ConnectControls.propTypes = {
    handleOpenEmail: PropTypes.func.isRequired
}

export default ConnectControls;
