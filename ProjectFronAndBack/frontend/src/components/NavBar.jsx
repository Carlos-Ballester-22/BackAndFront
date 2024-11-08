import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyles.css'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';


function NavBar() {

    const [page, setPage] = useState('');

    return (
        <AppBar position="sticky" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to='/' >
                        <AdbIcon sx={{ display: {md: 'flex' }, mr: 2 }} />                        
                    </Link>
                    <div onClick={() => {
                        setPage(!page)
                    }}> </div>
                    <Link to='/' className='page'> <Typography sx={{ textDecoration: ''}}>Home</Typography></Link>
                    <Link to='/editUserProfile' className='page'> Edit User Profile</Link>
                    <Link to='/createUser' className='page'> Create user</Link>
                    <Link to='/aboutUs' className='page'> About us</Link>       
                    <Link to='/userProfile' className='page'> User Profile</Link>
                    <Link to='/deleteUser' className='page'> Delete User</Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar