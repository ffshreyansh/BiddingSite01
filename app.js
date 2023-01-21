const express = require('express')
// const ejs = require('ejs')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home');
})


app.get('/product', (req, res)=>{
    res.render('product');
})

app.post('/product', (req, res)=>{
    res.render('product')
})









app.listen(process.env.PORT || 3000 , (req, res)=>{
    console.log(`Site is live on 3000`)
})