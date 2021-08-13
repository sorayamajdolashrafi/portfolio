import React, { Component } from "react";
import ViewSDKClient from "./ViewSDKClient";

class AdobePdf extends Component {

    componentDidMount() {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                // embedMode: "IN_LINE"
                embedMode: "SIZED_CONTAINER"
            });
        });
    }

    render() {
        return (
            // <div className="in-line-container">
            //     <div id="pdf-div" className="in-line-div"/>
            // </div>
            <div id="pdf-div" className="sized-container-div"/>
        );
    }
}

export default AdobePdf;