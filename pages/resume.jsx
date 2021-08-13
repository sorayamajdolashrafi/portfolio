import CV from '../components/resume/CV';
import styles from '../styles/resume.module.css';

export default function Resume() {
    return (
        <main className="page">
            <CV />
            {/* <a 
                className={styles.pdf}
                href='/SorayaBensonResume2021.pdf'  target='_blank'>
                    pdf
            </a> */}
        </main>
    )
}
