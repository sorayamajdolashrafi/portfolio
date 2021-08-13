import { useEffect } from 'react';
import AdobePdf from './AdobePdf';

const CV = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }, [])

    return (
        <AdobePdf />
    );
}

export default CV;