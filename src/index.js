import express from "express";
import { engine } from 'express-handlebars';
import path from 'path'
import {fileURLToPath} from 'url'; 

const app = express();

// Create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

// Setup for Express handlebars
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Setup for static file
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})  

app.listen(5000)