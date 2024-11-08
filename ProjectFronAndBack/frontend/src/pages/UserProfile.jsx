import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './UserProfileStyles.css';





export default function UserProfile() {
    const URL = "http://localhost:5142/api/User";

    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleGetUser = () => {
        fetch(`${URL}/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('User not found');
                }
                return response.json();
            })
            .then(data => {
                setUser(data);
            })
            .catch(error => {
                console.log('Error fetching user:', error);
            });
    };

    return (
        <div className='UserProfile'>
            <div className='formComplet'>
                <div className='fondo'>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: 400, maxWidth: '90%' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <h3>Enter Id of User</h3>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            value={userId}
                            onChange={handleChange}
                        />
                        <div className='buttonSend'>
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                onClick={handleGetUser}
                            >
                                Get User
                            </Button></div>
                        <h3>Name</h3>
                        <TextField
                            id="outlined-basic"
                            variant="outlined" 
                            value={user ? user.name : ''}

                            />
                        <h3> Last Name</h3>
                        <TextField 
                        id="outlined-basic" 
                        variant="outlined"
                        value={user ? user.lastName : ''}
                        />
                        <h3>Number Phone</h3>
                        <TextField 
                        id="outlined-basic" 
                        variant="outlined" 
                        value={user ? user.numberPhone : ''}
                        />
                    </Box>
                </div>
                <div className='formImage'>
                    <Grid >
                        <img src='https://i.pinimg.com/736x/24/a3/bc/24a3bc7f939ba49ecc054061dccbac61.jpg' className='image' />
                    </Grid>
                </div>
            </div>
        </div>
    );
}