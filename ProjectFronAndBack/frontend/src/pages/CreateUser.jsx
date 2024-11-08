import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ProfileStyles.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function CreateUser() {
    const URL = "http://localhost:5142/api/User";

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        numberPhone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: formData.name,
            lastName: formData.lastName,
            numberPhone: parseInt(formData.numberPhone, 10)
        };

        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('User not created');
                }
                return response.json();
            })
            .then(data => {
                console.log("User created: ", data);                
                setFormData({ name: '', lastName: '', numberPhone: '' });
            })
            .catch(error => {
                console.log('Error Request: ', error);
            });
    };
    

    return (
        <div className='Profile'>
            <div className='fondito'>
                <div className='textfields'>
                    <h1>Create User</h1>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ '& .MuiTextField-root': { m: 1, width: 400, maxWidth: '90%' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <h2>Name</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            value={formData.name}
                            onChange={handleChange}
                            name='name'
                        />
                        <h2>Last Name</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            name='lastName'
                        />
                        <h2>Number Phone</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Number Phone"
                            value={formData.numberPhone}
                            onChange={handleChange}
                            name='numberPhone'
                            type="number"
                        />
                        <div className='button'>
                            <Button
                                variant="contained"
                                disableElevation
                                type='submit'
                            >
                                Create user                                
                            </Button>                            
                        </div>
                    </Box>
                </div >
                <Grid>
                    <img src='https://i.pinimg.com/736x/84/c3/47/84c347083f8c9275a39c39c62eb2eca9.jpg' className='image' alt="User" />
                </Grid>
            </div>
        </div>
    );
}

export default CreateUser;