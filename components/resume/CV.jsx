import { useEffect } from 'react';
import AdobePdf from './AdobePdf';
import styles from '../../styles/resume.module.css';

const CV = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }, [])

    return (
        <div className={styles.pdfWrapper}>
        <AdobePdf /> 
        </div>
    );
}

export default CV;