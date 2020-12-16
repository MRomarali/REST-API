const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apis = require('./routes/app')
const app = express();
const PORT = process.env.port || 5000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/app',apis);

app.listen(PORT,()=>{
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
});