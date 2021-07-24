import CV from '../components/resume/CV';
import InLine from '../components/resume/InLine';
import styles from '../styles/resume.module.css';

export default function Resume() {
    return (
        <main className="page">
            {/* <CV /> */}
            <InLine />
            {/* <a 
                className={styles.pdf}
                href='/SorayaBensonResume2021.pdf'  target='_blank'>
                    pdf
            </a> */}
        </main>
    )
}
