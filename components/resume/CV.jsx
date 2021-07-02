import PropTypes from 'prop-types';
import ViewSDKClient from './ViewSDKCLient';

const CV = props => {

    return (
        <section>
            <embed 
                src='/soraya-benson-software-engineer-resume.pdf'
                type='application/pdf'
                width='auto'
                height='100%' />

            {/* <div id="resume" /> */}
        </section>
    )
}

CV.propTypes = {

}

export default CV;
