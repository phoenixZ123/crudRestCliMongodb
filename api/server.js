import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { Schema } from './models/TodoSchema.js'
const app = express()

app.use(express.json())
app.use(cors())

//mongodb
app.get('/todo', async (req, res) => {
    const todo = await Schema.find();
    res.json(todo)
})

app.post('/todo/new', (req, res) => {
    const todo = new Schema({
        text: req.body.text

    })
    todo.save();
    res.json(todo)
})

app.delete('/todo/delete/:id', async (req, res) => {
    const deleteResult = await Schema.findByIdAndDelete(req.params.id)

    res.json({ deleteResult })
})

app.put('/todo/complete/:id', async (req, res) => {
    const find = await Schema.findById(req.params.id)
    find.complete = !find.complete;
    find.save();
    res.json(find);

})

mongoose.connect('mongodb://127.0.0.1:27017/Note', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('mongodb connected')).catch((err) => console.log(err.message))

app.listen(3003, () => {
    console.log(`server running on port 3001`);
})