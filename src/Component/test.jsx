import React, { useState, useEffect } from 'react';

const Test = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch('http://test.com/api');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du message.');
                }
                const data = await response.json();
                setMessage(data.message); // Supposons que votre API retourne un objet avec une propriété "message"
            } catch (error) {
                console.error('Erreur lors de la récupération du message:', error);
                setMessage('Erreur lors de la récupération du message.');
            }
        };

        fetchMessage();

        return () => {
            // Clean-up si nécessaire
        };
    }, []);

    return (
        <div>
            <h1>Message de l'API :</h1>
            <p>{message}</p>
        </div>
    );
};

export default Test;
