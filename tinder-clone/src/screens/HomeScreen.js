import React, { useState } from 'react'
import Header from '../components/Header'
import TinderCards from '../components/TinderCards'
import SwipeButtons from '../components/SwipeButtons'

const HomeScreen = () => {
  const [people,setPeople] = useState([])
  return (
    <div>
        <Header/>
        <TinderCards people={people} setPeople={setPeople}/>
        <SwipeButtons/>
    </div>
  )
}

export default HomeScreen