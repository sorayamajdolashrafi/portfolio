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
        <section className={styles.cv}>
            <div className={styles.header}>
                <div className={styles.name}>
                    <h2>SORAYA BENSON</h2>
                    <h3>Full-stack Software Engineer</h3>
                </div>
                <div className={styles.tag}>
                    <h4>
                        Full-stack software engineer with a<br/>background as a visual artist who adores<br/>interactive storytelling and accessible design.
                    </h4>
                    <h4>
                        &#123; fine details + teamwork +<br/>clean code + problem solving &#125;
                    </h4>
                </div>
                <div className={styles.meat}>
                    <div className={styles.tinyBoy}>
                        <div className={styles.contact}>
                            <h5>contact</h5>
                            <ul>
                                <li key="email">
                                    <EmailIcon className={styles.icon}/>
                                    <a href="mailto:soraya.benson@gmail.com">email</a>
                                </li>
                                <li key="phone">
                                    <PhoneInTalkIcon className={styles.icon}/>
                                    <a href="tel:1-503-438-6848">phone</a>
                                </li>
                                <li key="location">
                                    <LocationOnIcon className={styles.icon}/>Beaverton, OR
                                </li>
                                <li key="website">
                                    <FlashOnIcon className={styles.icon}/>
                                    <a href="https://www.sorayabenson.com/">sorayabenson.com</a>
                                </li>
                                <li key="linkedin">
                                    <LinkedInIcon className={styles.icon}/>
                                    <a href="https://www.linkedin.com/in/soraya-benson/">/soraya-benson</a>
                                </li>
                                <li key="github">
                                    <GitHubIcon className={styles.icon}/>
                                    <a href="https://github.com/sorayabenson">/sorayabenson</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.tech}>
                            <h5>tech skills</h5>
                            <ul>
                                {techStack.map((tech) => (
                                    <li key={tech.category}>
                                        <h6>{tech.category}</h6>
                                        <ul>
                                            {tech.skills.map(skill => (
                                                <li key={skill}>
                                                    <p>{skill}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.education}>
                            <h5>education</h5>
                            <ul>
                                {education.map((degree) => (
                                    <li key={degree.school}>
                                    <div className={styles.school}>
                                        <h6>{degree.school}</h6>
                                        <p>| {degree.year}</p>
                                    </div>
                                    <p>{degree.title}</p>
                                    <p>{degree.location}</p>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.bigBoy}>
                        <div className={styles.projects}>
                            <h5>projects</h5>
                            <ul>
                                {projects.map((project => (
                                    <li key={project.name}>
                                        <div className={styles.projectHeader}>
                                            <h6>{project.name} |</h6>
                                            <span>
                                                <a href={project.github}>github</a> + 
                                                <a href={project.site}>site</a> |
                                            </span>
                                            <span>{project.tech}</span>
                                        </div>
                                        <p className={styles.projectTag}>{project.tag}</p>
                                        <ul>
                                            {project.contributions.map((contribution, i) => (
                                                <li key={i}>
                                                    <p className={styles.contribution}>{contribution}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )))}
                            </ul>
                        </div>
                        <div className={styles.experience}>
                            <h5>experience</h5>
                            <ul>
                                {experience.map((job) => (
                                    <li key={job.title}>
                                        <div className={styles.jobHeader}>
                                            <h6>{job.title}</h6>
                                            {
                                                job.location ? 
                                                <p>| {job.location}</p> 
                                                : null
                                            }
                                            <p>| {job.year}</p>
                                            <ul>
                                                {job.skills.map((skill, i) => (
                                                    <li key={i}>
                                                        <p>{skill}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

CV.propTypes = {

}

export default CV;
