import PropTypes from 'prop-types';
import styles from '../../styles/connect.module.css';
import CancelIcon from '@material-ui/icons/Cancel';

const Form = ( { handleSendEmail, handleCloseEmail, sender, onSenderChange, email, onEmailChange, message, onMessageChange, sent } ) => {
    return (
        <section className={styles.form}>
            <button onClick={handleCloseEmail}><CancelIcon /></button>
            {
                sent ? 
                <p>thanks for your message {sender} {email} {message}</p>
                : 
                <form onSubmit={handleSendEmail}>
                    <input 
                        type="text"
                        value={sender}
                        onChange={onSenderChange}
                        placeholder="name"
                        className={styles.sender}></input>
                    <input 
                        type="email"
                        value={email}
                        onChange={onEmailChange}
                        placeholder="email"
                        className={styles.email}></input>
                    <input 
                        type="text"
                        value={message}
                        onChange={onMessageChange}
                        placeholder="message"
                        className={styles.message}></input>
                    <button>send</button>
                </form>
            }
        </section>
    )
}

Form.propTypes = {
    handleSendEmail: PropTypes.func.isRequired,
    handleCloseEmail: PropTypes.func.isRequired,
    sender: PropTypes.string.isRequired,
    onSenderChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    onMessageChange: PropTypes.func.isRequired,
    sent: PropTypes.bool.isRequired
}

export default Form;
