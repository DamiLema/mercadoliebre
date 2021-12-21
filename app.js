/*const express = require('express');
const path = require('path');

const app = express();

app.use('/css',express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/js')))
app.use('/js',express.static(path.resolve(__dirname, './node_modules/jquery/dist')))

const publicFolderPath = path.resolve(__dirname, './public');

app.use(express.static(publicFolderPath));

app.use(express.static(path.join(__dirname, "./public")));

app.get('/', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});
app.get('/registro', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.join(__dirname, './views/register.html'));  // Permite enviar un archivo HTML
});



app.listen(7777, () => {
    console.log("Servidor corriendo");
});*/

const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve (__dirname, './public')

app.use(express.static(publicFolderPath));

app.use(express.static(path.join(__dirname, "./public")));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
   });

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
   });
   app.get('/ingresar', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
   });
app.listen(8888, () => {
    console.log("Servidor OK");
})


