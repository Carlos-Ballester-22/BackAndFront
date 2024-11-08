import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ProfileStyles.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

function EditUserProfile() {
    const URL = "http://localhost:5142/api/User";

    const [formData, setFormData] = useState({
        id: '',
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

    const handleUpdate = (e) => {
        e.preventDefault();

        const updateUser = {
            id: formData.id,
            name: formData.name,
            lastName: formData.lastName,
            numberPhone: parseInt(formData.numberPhone, 10)
        };

        fetch(`${URL}/${formData.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('User not updated');
                }
                return response.json();
            })
            .then(data => {
                console.log('User Updated: ', data);
                setFormData({ id: '', name: '', lastName: '', numberPhone: ''});
            })
            .catch(error => {
                console.log('Error Request: ', error)
            });
    };



    return (
        <div className='Profile'>
            <div className='fondito'>
                <div className='textfields'>
                    <h1>Edit User</h1>
                    <Box
                        component="form"
                        onSubmit={handleUpdate}
                        sx={{ '& .MuiTextField-root': { m: 1, width: 400, maxWidth: '90%' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <h2>User ID</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="User ID"
                            value={formData.id}
                            onChange={handleChange}
                            name='id'
                            type="number"
                        />
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
                            name='numberPhone'
                            value={formData.numberPhone}
                            onChange={handleChange}                            
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
                    <img src='https://i.pinimg.com/564x/47/5a/d6/475ad6bec1da2961378a4ffb14469156.jpg' className='image' alt="User" />
                </Grid>
            </div>
        </div>
    );
}

export default EditUserProfile;