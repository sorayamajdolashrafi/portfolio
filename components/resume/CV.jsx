import PropTypes from 'prop-types';
import styles from '../../styles/resume.module.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import techStack from './techStack.json';
import education from './education.json';
import projects from './projects.json';
import experience from './experience.json';


const CV = props => {
    return (
        <div className={styles.cv}>
            <header className={styles.header}>
                <h2>
                    Full-stack software engineer<br/>with a background as a visual artist<br/>who adores interactive storytelling and accessible design.
                </h2>
            </header>
            <section className={styles.contact}>
                <h3>contact</h3>
                <ul>
                    <li key="location">
                        <LocationOnIcon fontSize="small" className={styles.icon}/>Beaverton, OR
                    </li>
                    <li key="email">
                        <EmailIcon fontSize="small" className={styles.icon}/>
                        <a href="mailto:hello@sorayabenson.com" target="_blank">hello@sorayabenson.com</a>
                    </li>
                    <li key="phone">
                        <PhoneInTalkIcon fontSize="small" className={styles.icon}/>
                        <a href="tel:1-503-438-6848" target="_blank">phone</a>
                    </li>
                    <li key="website">
                        <FlashOnIcon fontSize="small" className={styles.icon}/>
                        <a href="https://www.sorayabenson.com/" target="_blank">sorayabenson.com</a>
                    </li>
                    <li key="linkedin">
                        <LinkedInIcon fontSize="small" className={styles.icon}/>
                        <a href="https://www.linkedin.com/in/soraya-benson/" target="_blank">/soraya-benson</a>
                    </li>
                    <li key="github">
                        <GitHubIcon fontSize="small" className={styles.icon}/>
                        <a href="https://github.com/sorayabenson" target="_blank">/sorayabenson</a>
                    </li>
                </ul>
            </section>
            <section className={styles.tech}>
                <h3>tech skills</h3>
                <ul className={styles.technologies}>
                    {techStack.map((tech) => (
                        <li key={tech.category}>
                            <h4>{tech.category}</h4>
                            <ul className={styles.specifics}>
                                {tech.skills.map(skill => (
                                    <li key={skill}>
                                        <p>{skill}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.projects}>
                <h3>projects</h3>
                <ul className={styles.builds}>
                    {projects.map((project => (
                        <li key={project.name}>
                            <div className={styles.projectHeader}>
                                <h4>{project.name}</h4>
                                <p>|</p> 
                                <a href={project.github} target="_blank">github</a> 
                                <p>+</p> 
                                <a href={project.site} target="_blank">site</a>
                                <p>| {project.tech}</p>
                            </div>
                            <p className={styles.projectTag}>{project.tag}</p>
                            <ul className={styles.contributions}>
                                {project.contributions.map((contribution, i) => (
                                    <li key={i}>
                                        <p className={styles.contribution}>{contribution}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )))}
                </ul>
            </section>
            <section className={styles.experience}>
                <h3>experience</h3>
                <ul className={styles.job}>
                    {experience.map((job) => (
                        <li key={job.title}>
                            <div className={styles.jobHeader}>
                                <h4>{job.title}</h4>
                                {
                                    job.place ? 
                                    <p>| {job.place}</p> 
                                    : null
                                }
                                <p>| {job.year}</p>
                            </div>
                            <ul className={styles.skills}>
                                    {job.skills.map((skill, i) => (
                                        <li key={i}>
                                            <p>{skill}</p>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.education}>
                <h3>education</h3>
                <ul>
                    {education.map((degree) => (
                        <li key={degree.school}>
                        <div className={styles.school}>
                            <h4>{degree.school}</h4>
                            <p>| {degree.year}</p>
                        </div>
                        <p>{degree.title}</p>
                        <p>{degree.location}</p>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

CV.propTypes = {

}

export default CV;
