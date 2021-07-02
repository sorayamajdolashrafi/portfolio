import PropTypes from 'prop-types';
// import ViewSDKClient from './ViewSDKCLient';
// import { useEffect } from 'react';

const CV = props => {
    // useEffect(() => {
    //     const viewSDKClient = new ViewSDKClient();
    //     viewSDKClient.ready().then(() => {
    //         /* Invoke file preview */
    //         viewSDKClient.previewFile("pdfWrapper", {
    //             /* Pass the embed mode option here */
    //             embedMode: "IN_LINE"
    //         });
    //     });
    // }, []);

    return (
        <section>
            hello
            <iframe src='soraya-benson-software-engineer-resume.pdf' height="100%" width="80%"></iframe>
        </section>
    );
}

CV.propTypes = {

}

export default CV;
