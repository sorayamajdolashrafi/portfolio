import CV from '../components/resume/CV';
import Test from '../components/resume/Test';
import styles from '../styles/resume.module.css';

export default function Resume() {
    return (
        <main className="page">
            {/* <CV /> */}
            <Test />
            {/* <a 
                className={styles.pdf}
                href='/SorayaBensonResume2021.pdf'  target='_blank'>
                    pdf
            </a> */}
        </main>
    )
}
