import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './UserProfileStyles.css';

export default function DeleteUser() {
    const URL = "http://localhost:5142/api/User";

    const [userId, setUserId] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleDeleteUser = () => {
        fetch(`${URL}/${userId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            setStatusMessage(`User with ID ${userId} was successfully deleted.`);
            setUserId('');
        })
        .catch(error => {
            console.log('Error deleting user:', error);
            setStatusMessage('Error deleting user: ' + error.message);
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
                        <h3>Enter User ID to Delete</h3>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            value={userId}
                            onChange={handleChange}
                        />
                        <div className='buttonSend'>
                            <Button
                                variant="contained"
                                color="error"
                                endIcon={<DeleteIcon />}
                                onClick={handleDeleteUser}
                            >
                                Delete User
                            </Button>
                        </div>
                        {statusMessage && (
                            <p className='statusMessage'>{statusMessage}</p>
                        )}
                    </Box>
                </div>
                <div className='formImage'>
                    <Grid>
                        <img src='https://i.pinimg.com/736x/24/a3/bc/24a3bc7f939ba49ecc054061dccbac61.jpg' className='image' alt="User"/>
                    </Grid>
                </div>
            </div>
        </div>
    );
}