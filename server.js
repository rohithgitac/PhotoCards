import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import multer from 'multer'
import connectDB from './config/db.js';
import { Card } from './schema/dbCards.js';

//app config
const app = express();
const port = process.env.PORT || 8000
//middleware
app.use(express.json())
app.use(cors())         //to connect frontend 
//db config
connectDB()
//Image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './tinder-clone/public')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })

  const upload = multer({ storage: storage })
//api endpoints
app.get('/',(req,res)=>{
    res.status(200).send("HI its working nice...")
})

app.post('/tinder/cards',async(req,res)=>{
    try {
        
        const userCard = req.body;
        const newCard = new Card(userCard)
        const response = await newCard.save()
        res.status(200).send(response)

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error..!!')
        
    }
   
})
app.get('/tinder/cards',async(req,res)=>{
    try {
        const allCards = await Card.find()
        res.status(200).json(allCards)
        
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error...')
    }
})
app.delete('/tinder/cards/:id', async(req,res) => {
    try {
        const deleteId = req.params.id;
        const resultCard = await Card.deleteOne({_id:deleteId})
        res.status(200).json(resultCard)
    } catch (error) {
        console.log(error)
    }
})
app.post('/uploadimg',upload.single('file'),async(req,res) => {
    try {
        console.log(req.file.path)
        res.status(200).send(`${req.file.path}`)
    } catch (error) {
        res.send(error)
    }
})
//listener
app.listen(port,() => 
    console.log(`server started on port ${port}`)
   
)