import styles from '../../styles/about.module.css';

const Bio = () => {
    return (
        <section className={styles.bio}>
            <h2>oh, hello!</h2>
            <ul>
                <li>
                    <p className={styles.p1}>
                        I'm a frontend software engineer currently enjoying my role at New Relic on the Logging team.
                    </p>
                </li>
                <li>
                    <p className={styles.p2}>
                        My background as a visual artist has shaped my love for creative problem solving and getting lost in research.
                    </p>
                </li>
                <li>
                    <p className={styles.p3}>
                        Right now I'm really into learning about how to make the internet accesible. Off the internet I'm learning how to weave tiny carpets.
                    </p>
                </li>
                <li>
                    <p className={styles.p4}>
                        You can reach me at <a href="mailto:hello@sorayabenson.com" target="_blank">hello@sorayabenson.com</a>
                    </p>   
                </li>
            </ul>
        </section>
    )
}

export default Bio;
