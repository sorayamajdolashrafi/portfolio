import styles from '../styles/resume.module.css';
import CV from '../components/resume/CV';

export default function Resume() {
    return (
        <main className="page">
            {/* <CV /> */}
            <iframe src='soraya-benson-software-engineer-resume.pdf' height="100%" width="80%"></iframe>
            {/* <embed 
                src='/soraya-benson-software-engineer-resume.pdf'
                type='application/pdf'
                width='80%'
                height='100%' /> */}
        </main>
    )
}
