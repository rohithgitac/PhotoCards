import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import '../App.css'
import axios from '../axios.js'

export const AddCard = () => {

  const [name,setName] = useState('')
  const [link,setLink] = useState('')
  const [image,setImage] = useState({
    preview:'',
    data:''
  })
  const [status,setStatus]= useState('')

  const navigate = useNavigate()

  const dataSubmit = async(e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append('file',image.data)
    console.log(image.data)
    if(image.data){
      console.log('image is availavle..........')
    const response = await axios.post('/uploadimg',formData)
    console.log(response.data)
    if(response){
      let string = response.data;
      var result = string.slice(20)
      console.log(result)
      setStatus(response.data)
      var datas = {
        name:name,
        imgUrl:result
      }
      await axios.post('/tinder/cards',datas)
      }
    navigate('/')
    } else{
      console.log('name ' +name +'and path'+ link)
     const writtenDatas = {
      name:name,
      imgUrl:link
    }
    await axios.post('/tinder/cards',writtenDatas)
    navigate('/')
  }
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <div className='addCard'>
      <div className='addCard-body'>
        <form className='addCard-form' onSubmit={dataSubmit}>
        <div className='addCard-fill'>
        <div className='fill'>
        <label>Enter name</label>
        <input required autoFocus type='text' tabIndex='1' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='fill'>
        <label>Image link</label>
        <input type='text' value={link} tabIndex='2' onChange={(e) => setLink(e.target.value)}/>
        </div>
        </div>
        <div className='element'>
        <h4 className='imgUpload'>OR Upload image</h4>
        {image.preview && <img src={image.preview} alt='' width='100' height='100'/>}
        <hr></hr>
        <input type='file' name='file' onChange={handleFileChange}/>
        </div>
        <div  className='navbutton'>
          <div className='backbtn'>
              <Link to='/'><button type='button'>Go Back</button></Link>  
          </div>
          <div className='subbtn'>
              <button type='submit'>Submit</button>
          </div>
        </div>
        {status && <h2>{status}</h2>} 
      </form>  
      </div>
    </div>
  )
}
