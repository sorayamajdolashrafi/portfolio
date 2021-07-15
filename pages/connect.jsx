import { useState } from 'react';
import ConnectControls from '../components/connect/ConnectControls';
import Form from '../components/connect/Form';
import styles from '../styles/connect.module.css';

export default function Connect() {
    const [email, setEmail] = useState(false);

    const handleOpenEmail = () => {
        setEmail(true);
    }

    const handleCloseEmail = () => {
        setEmail(false);
    }

    return (
        <main className="page">
            {
                email ? <Form handleCloseEmail={handleCloseEmail}/>
                : <ConnectControls handleOpenEmail={handleOpenEmail}/>
            }
        </main>
    )
}
