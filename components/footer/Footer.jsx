import styles from '../../styles/Footer.module.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="mailto:hello@sorayabenson.com" 
                role="button"
                target="_blank"
                aria-label="link to email">
                <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/soraya-majdolashrafi/" 
                role="button"
                target="_blank"
                aria-label="link to linkedin">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/sorayamajdolashrafi" 
                role="button"
                target="_blank"
                aria-label="link to github">
                <GitHubIcon />
            </a>
        </footer>
    )
}

export default Footer;