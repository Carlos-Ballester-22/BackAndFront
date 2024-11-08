import React, { useState, useEffect } from "react";
import Card from '../components/Home/Card';
import './HomeStyles.css';

export default function Home() {
    const url = "http://localhost:5142/api/User";
    const [users, setUsers] = useState([]);

    const fetchInfo = () => {
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            return response.json();
        })
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className='Home'>
            <div>
                <div className="divCard">
                    {users.map((user) => (
                        <div key={user.id} className="cards">
                            <Card
                                name={user.name}
                                lastName={user.lastName}
                                numberPhone={user.numberPhone}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}