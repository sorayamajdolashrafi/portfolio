import styles from '../../styles/Footer.module.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://www.linkedin.com/in/soraya-benson/" 
                role="button"
                target="_blank"
                aria-label="link to linkedin">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/sorayabenson" 
                role="button"
                target="_blank"
                aria-label="link to github">
                <GitHubIcon />
            </a>
            <a href="https://twitter.com/sorayamajd" 
                role="button"
                target="_blank"
                aria-label="link to twitter">
                <TwitterIcon />
            </a>
            <a href="mailto:soraya.benson@gmail.com" 
                role="button"
                target="_blank"
                aria-label="link to email">
                <EmailIcon />
            </a>
        </footer>
    )
}

export default Footer;