const express = require('express')
const app = express()

app.set('views', './views');
app.set('view engin', 'ejs');
app.use('/public',express.static('public'));


app.get('/', (req ,res)=>{
    res.render('index.ejs');
});

const mongoose = require('mongoose');
const connection = mongoose.connection;

app.listen(3016,()=>{
    console.log("connected to port 3016");
    mongoose.connect('mongodb://localhost:27017/website',({useUnifiedTopology:true, useNewUrlParser:true }));
}); 

const cors = require('cors');
app.use(cors());

// Middleware de gestion globale des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Quelque chose s\'est mal passé !', error: err.message });
});




connection.once('open',()=>{
    console.log("Connected to MongoDB");
});

const bodyParser = require('body-parser');
const Blog = require('./modeles/modBlog');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// insert data in db
app.post('/insertBlog', (req,res) => {
    
    const newBlog = new Blog(req.body);

    newBlog.save((err, newBlog) =>{
        if (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(newBlog);
    });
});

//read data from db
app.get('/showBlogs',(req,res)=>{

    Blog.find()
    .exec()
    .then(selectedBlog => res.status(200).json(selectedBlog));
});

//delete data from db
app.delete('/deleteBlog/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id,(err,myBlog)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(202).json({ msg:`Blog with the id ${myBlog._id} has been deleted`});
    });
});


// Update data in the db
app.put('/updateBlog/:id', (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    Blog.findByIdAndUpdate(
        id,
        updateData,
        { new: true }, // This option returns the updated document
        (err, updatedBlog) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(200).json(updatedBlog);
        }
    );
});

app.get('/findBlog/:id', (req, res) => {
    const blogId = req.params.id;
    Blog.findById(blogId)
        .exec()
        .then(b => {
            if (b) {
                res.status(200).json(b);
            } else {
                res.status(404).json({ message: 'Blog not found' });
            }
        })
        .catch(err => res.status(500).json({ error: err }));
});
