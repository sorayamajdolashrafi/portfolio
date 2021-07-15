import { useState, useEffect } from 'react';
import ConnectControls from '../components/connect/ConnectControls';
import Form from '../components/connect/Form';

export default function Connect() {
    const [form, setForm] = useState(false);
    const [sender, setSender] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

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

        console.log(sender, email, message);

        let data = { sender, email, message };

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('response!')
            if (res.status === 200) {
                console.log('woohoo!')
                setSent(true);
            }
        });
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
                    />
                : <ConnectControls handleOpenEmail={openEmail}/>
            }
        </main>
    )
}
