import styles from '../../styles/Footer.module.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav>
                <a href="https://www.linkedin.com/in/soraya-benson/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/sorayabenson" target="_blank">
                    <GitHubIcon />
                </a>
                <a href="https://twitter.com/sorayamajd" target="_blank">
                    <TwitterIcon />
                </a>
                <a href="mailto:soraya.benson@gmail.com" target="_blank">
                    <EmailIcon />
                </a>
            </nav>
        </footer>
    )
}

export default Footer;