import { useState } from 'react';
import ConnectControls from '../components/connect/ConnectControls';
import Form from '../components/connect/Form';

export default function Connect() {
    const [form, setForm] = useState(false);
    const [sender, setSender] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const openEmail = () => {
        setForm(true);
    }

    const closeEmail = () => {
        setForm(false);
        setSent(false);
        setMessage('');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        let data = { sender, email, message };
        setLoading(true);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                console.log('woohoo!')
                setSent(true);
            } else {
                console.log('heartbreakcity')
                setError(true);
            }
        }).then(setLoading(false));
    }

    return (
        <main className="page">
            {
                form ? <Form 
                    handleCloseEmail={closeEmail} 
                    handleSendEmail={sendEmail}
                    onSenderChange={(e) => setSender(e.target.value)}
                    onEmailChange={(e) => setEmail(e.target.value)}
                    onMessageChange={(e) => setMessage(e.target.value)}
                    sender={sender}
                    email={email}
                    message={message}
                    sent={sent}
                    error={error}
                    loading={loading}
                    />
                : <ConnectControls handleOpenEmail={openEmail}/>
            }
        </main>
    )
}
