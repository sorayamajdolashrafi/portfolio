import { useState, useEffect } from 'react';
import InLine from './InLine';

const Test = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])

    return (
        <div>
            <InLine />
        </div>
    )
}

export default Test;
