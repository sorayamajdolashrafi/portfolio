import PropTypes from 'prop-types';
import styles from '../../styles/about.module.css';

const Tech = props => {
    return (
        <section className={styles.tech}>
            <h2>tech:</h2>
            <ul>
                <li>
                    <h3>languages</h3>
                    <p>JavaScript, HTML, CSS</p>
                </li>
                <li>
                    <h3>testing suites</h3>
                    <p>Jest, Supertest, QUnit, React Testing Library</p>
                </li>
                <li>
                    <h3>libraries + frameworks</h3>
                    <p>React, Node, Express, Superagent, Webpack, Material-UI, Socket.IO, Next.js</p>
                </li>
                <li>
                    <h3>databases</h3>
                    <p>PostgreSQL</p>
                </li>
                <li>
                    <h3>skills</h3>
                    <p>TDD, Remote Collaboration, Pair Programing</p>
                </li>
                <li>
                    <h3>dev tools</h3>
                    <p>VScode, Github, Postman, PGadmin, Heroku, Netlify, Adobe CC</p>
                </li>
            </ul>
        </section>
    )
}

Tech.propTypes = {

};

export default Tech;
