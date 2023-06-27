import React, { useEffect, useState } from 'react'
import '../css files/tinderCards.css'
import TinderCard from 'react-tinder-card'
import DeleteIcon    from '@mui/icons-material/Delete'
import {IconButton}  from '@mui/material';
import instance from '../axios';
import { useNavigate } from 'react-router-dom';

const TinderCards = ({people,setPeople}) => {

    // const [people,setPeople] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async() => {
            const result = await instance.get('/tinder/cards')
            setPeople(result.data)
        }
        fetchData()
    },[setPeople])

    const swiped = (direction,nameToDelete) => {
        console.log('removing ' + nameToDelete)
      }
      
    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
      }
    
    const deleteCard = async(id) => {
        console.log(id)
        const resultOfDelete = await instance.delete(`/tinder/cards/${id}`)
        console.log('result is ')
        console.log(resultOfDelete)
        const result = await instance.get('/tinder/cards')
        setPeople(result.data)
    }

  return (
    <div className='tinderCards'>
        <div className='tinderCards_container'>
        {
            people.map((person)=>
            (
                <TinderCard key={person._id}
                            className='swipe'
                            onSwipe={(dir)=> swiped(dir,person.name)} 
                            onCardLeftScreen={() => outOfFrame(person.name)}
                            preventSwipe={['left', 'right','down']}
                            >
                    <div className='card' title='drag up to remove'
                         style={{backgroundImage:`url(${person.imgUrl})`,backgroundSize:'contain'}}>
                      <h3>{person.name}</h3>
                      <button onClick={() => deleteCard(person._id)}><DeleteIcon fontSize='small' color='white'/></button>  
                    </div>
                </TinderCard>

            ))
        }
        </div>

    </div>
  )
}

export default TinderCards