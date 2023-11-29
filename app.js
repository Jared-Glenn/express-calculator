const express = require('express');

const app = express();


function getKeyByValue(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
}


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
app.get('/median', (req, res) => {
    let median;
    
    const numbers = req.query['numbers'];
    let arr = numbers.split(',').map(Number);
    const len = arr.length;

    if (len%2 === 0) {
        const mid1 = (Math.floor(len/2)) - 1;
        const mid2 = mid1 + 1;

        median = (arr[mid1] + arr[mid2])/2;
    }
    else {
        const mid = (Math.ceil(len/2)) - 1;

        median = arr[mid];
    }

    return res.json({"median": median})
})

// Mode
app.get('/mode', (req, res) => {
    let mode;
    
    const numbers = req.query['numbers'];
    let arr = numbers.split(',').map(Number);
    
    const counts = {};

    arr.forEach(function(e) {
        if(counts[e] === undefined) {
            counts[e] = 0;
        }
        counts[e] += 1;
    })

    const newArr = Object.values(counts);
    const max = Math.max(...newArr);
    const keys = getKeyByValue(counts, max)

    if (keys.length === 1) {
        mode = keys[0];
    }
    else {
        mode = Object.values(keys);
    }

    return res.json({"mode": mode})
})


app.listen(3000, function() {
    console.log('App on port 3000');
})