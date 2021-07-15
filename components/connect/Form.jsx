import PropTypes from 'prop-types';
import styles from '../../styles/connect.module.css';
import CancelIcon from '@material-ui/icons/Cancel';

const Form = ( { handleSendEmail, handleCloseEmail, sender, onSenderChange, email, onEmailChange, message, onMessageChange, sent, error, loading } ) => {
    return (
        <section className={styles.form}>
            <div className={styles.closeWrapper}>
                <button onClick={handleCloseEmail} className={styles.close}><CancelIcon /></button>
            </div>
            {
                loading ? 
                <p>loading...</p>
                : sent ? 
                <div className={styles.sent}>
                    <p>Thanks for your message, {sender}!</p>
                    <p className={styles.sentMessage}>{message}</p>
                    <p>I'll email you back at {email}</p>
                </div>
                : error ?
                <div className={styles.error}>
                    <p>Yikes, something went wrong! Send me a direct email at:</p>
                    <a href="mailto:hello@sorayabenson.com" target="_blank">hello@sorayabenson.com</a>
                </div>
                : <form onSubmit={handleSendEmail}>
                    <div className={styles.senderWrapper}>
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
                    </div>
                    <textarea 
                        type="text"
                        value={message}
                        onChange={onMessageChange}
                        placeholder="message"
                        className={styles.message}></textarea>
                    <div className={styles.sendWrapper}>
                        <button className={styles.send}>send</button>
                    </div>
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
