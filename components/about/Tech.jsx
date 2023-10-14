import styles from '../../styles/about.module.css';

const Tech = () => {
    return (
        <section className={styles.tech}>
            <h2>tech</h2>
            <ul>
                <li>
                    <h3>languages</h3>
                    <p>JavaScript, HTML, CSS</p>
                </li>
                <li>
                    <h3>testing suites</h3>
                    <p>Jest, React Testing Library, QUnit,<br/>Playwright, Saucelabs</p>
                </li>
                <li>
                    <h3>libraries + frameworks</h3>
                    <p>React, Next.js, Webpack, Material-UI, Socket.IO,<br/>Node, Express, Superagent</p>
                </li>
                <li>
                    <h3>databases</h3>
                    <p>PostgreSQL, GraphQL</p>
                </li>
                <li>
                    <h3>skills</h3>
                    <p>TDD, Remote Collaboration, Pair Programing</p>
                </li>
                <li>
                    <h3>dev tools</h3>
                    <p>VScode, Github, Postman, PGadmin, Heroku, Netlify, Vercel, Adobe CC</p>
                </li>
            </ul>
        </section>
    )
};

export default Tech;
