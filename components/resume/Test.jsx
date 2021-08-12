import { useState, useEffect } from 'react';
import InLine from './InLine';
import Script from 'next/script';

const Test = () => {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    // }, [])

    return (
        <div>
            {/* <InLine /> */}
            <Script 
                src="https://documentcloud.adobe.com/view-sdk/main.js"
                strategy="lazyOnload"    
            />
            <Script 
                type="text/javascript"
                src="./adobeScript.js"
                strategy="lazyOnload"    
            />


            {/* <script type="text/javascript">
                document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
                    let adobeDCView = new AdobeDC.View({clientId: "d08eb1e11d084244819c22f5389b6af6"});
                    adobeDCView.previewFile({
                        content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
                        metaData:{fileName: "Bodea Brochure.pdf"}
                    }, {embedMode: "LIGHT_BOX"});
                });
            </script> */}
        </div>
    )
}

export default Test;
