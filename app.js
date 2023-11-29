const express = require('express');

const app = express();

// Mean
app.get('/mean', (req, res) => {
    const numbers = req.query['numbers'];
    let arr = numbers.split(',').map(Number);
    const len = arr.length;
    
    arrSum = arr.reduce(function (a, b) {return a+b}, 0);
    mean = arrSum/len;

    return res.json({"mean": mean})
})

// Median


// Mode


app.listen(3000, function() {
    console.log('App on port 3000');
})