const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('index', {title: 'final project homepage', data: ['Martin Jaakola', 'Dang Vu Quang', 'Noellar Kappa', 'Guy Lawrence']});
});

app.listen(PORT, ()=> {
    console.log('Listening on port '+ PORT);
});

