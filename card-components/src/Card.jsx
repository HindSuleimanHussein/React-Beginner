import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
    const [profilePic, setProfilePic] = useState('');

    useEffect(() => {
        const fetchProfilePic = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/HindSuleimanHussein');
                setProfilePic(response.data.avatar_url);
            } catch (error) {
                console.error('Error fetching GitHub profile:', error);
            }
        };

        fetchProfilePic();
    }, []);

    return (
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2 className="card-title">Hind Suleiman Hussein</h2>
            <p className='card-text'>Frontend Developer</p>
        </div>
    );
}

export default Card;
