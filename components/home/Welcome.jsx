import styles from '../../styles/index.module.css';

const Welcome = () => {
    return (
        <div className={styles.moonCradle}>
            <div className={styles.moon}>
                <div className={styles.craterWrapper}>
                    <h2>oh, hello you.</h2>
                    <h2>i'm soraya.</h2>
                    <h2>a frontend software engineer.</h2>
                    <h2 className={styles.ghost}>👻</h2>
                    <div className={styles.shadow}></div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
