import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'

const Header: React.FC = () => {
  return (
    <>
        <AppBar position="sticky">
            <Toolbar>
                <Button color="inherit">Home</Button>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header