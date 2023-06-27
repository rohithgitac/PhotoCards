import React from 'react'
import '../css files/header.css'
import Person3Icon from '@mui/icons-material/Person3';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum'
const Header = () => {
  return (
    <div className='header'> 
    <IconButton>
        <Person3Icon fontSize='large' className='headerIcon' />
    </IconButton>
    <h3 style={{color:'tomato'}}>ADD YOUR TINDERCARD PHOTO</h3>
    <IconButton>
        <ForumIcon fontSize='large'className='headerIcon'/>
    </IconButton>
    </div>
  )
}

export default Header