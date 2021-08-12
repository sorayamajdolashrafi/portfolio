import { useState, useEffect } from 'react';
import InLine from './InLine';
import Script from 'next/script';

const Test = () => {
    return (
        <div>
            <InLine />
            {/* <Script 
                src="https://documentcloud.adobe.com/view-sdk/main.js"
                strategy="lazyOnload"    
            /> */}
        </div>
    )
}

export default Test;
