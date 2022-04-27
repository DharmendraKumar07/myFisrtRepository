const express = require('express');
const dbConnect = require('mongodb');
const bodyParser = require('body-parser');
const app = express();

app.get('/', async (req, res) => {
    let data = await dbConnection();
    data = data.find().toarray();
    res.send({ name: 'abc', email:'abc123@gmai.com', phoneNumber:'1234567890'})
});

app.listen(5000,(err)=>{if(err)console.log('failed'), console.log('running on port:5000')});
