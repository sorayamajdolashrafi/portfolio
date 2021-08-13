import React, { Component } from "react";
import ViewSDKClient from "./ViewSDKClient";

class AdobePdf extends Component {

    viewerConfig = {
        // pdf configuration https://github.com/adobe/pdf-embed-api-samples/blob/master/More%20Samples/React%20Samples/src/samples/ViewerCustomization.js

        showDownloadPDF: true,

        showPrintPDF: true,

        showPageControls: true,

        dockPageControls: true,

        defaultViewMode: "FIT_PAGE",
    };


    componentDidMount() {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", this.viewerConfig);
            // viewSDKClient.previewFile("pdf-div", {
            //     /* Pass the embed mode option here */
            //     embedMode: "IN_LINE"
            // });
        });
    }

    render() {
        return (
            <div className="in-line-container">
                <div id="pdf-div" className="in-line-div"/>
            </div>
        );
    }
}

export default AdobePdf;