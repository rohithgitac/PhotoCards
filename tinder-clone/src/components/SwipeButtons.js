import React from 'react'
import '../css files/swipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon    from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon  from '@mui/icons-material/FlashOn'
import {IconButton}  from '@mui/material';
import { Link } from 'react-router-dom'
import instance from '../axios'


const SwipeButtons = () => {
    

    const refreshPage = () => {
        window.location.reload(false)
    }

  return (
    <div className='swipeButtons'>
    
        <IconButton onClick={() => refreshPage()} className='swipeButtons__repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <Link to='/addCard'>
        
        <IconButton className='swipeButtons__star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>

        </Link>
        <IconButton className='swipeButtons__right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons