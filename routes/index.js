var express = require('express');
var router = express.Router();

//

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: getNumbers('L', res) });
    res.render('index', { title: 'hi' });
    //res.sendFile('/home/chris/Projects/git/myExpressApp/public/old/index.html');

});

// POST method route
router.post('/', function(req, res) {

    //res.send('POST request to the homepage');
    var mytype = req.body.LotteryRadio;
    res.render('index', {
        drawLetter: mytype,
        title: "Picker",
        mainBallsStr: getNumbers(mytype),
        backLink: "http://127.0.0.1:3000/"
    });
})

module.exports = router;
// //Note that in version 4 of express, express.bodyParser() was

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

// 
seed = 1.6180339887;
num1 = seed - 1;


function getNumbers(drawType) {
    console.log(drawType);
    var numMainBalls;
    var mainBallsRange;
    var numExtraBalls;
    var extraBallsRange;
    //var balls = [numMainBalls];
    var extraBalls; // = [numExtraBalls];
    var mainBalls; // = [numMainBalls];

    if (drawType == "Lottery") {
        numMainBalls = 6;
        mainBallsRange = 59;
        numExtraBalls = 0;
        extraBallsRange = 0;
        extraBalls = [numExtraBalls];
        mainBalls = [numMainBalls];
    }
    if (drawType == "Euromillions") {
        numMainBalls = 5;
        mainBallsRange = 50;
        numExtraBalls = 2;
        extraBallsRange = 12;
        extraBalls = [numExtraBalls];
        mainBalls = [numMainBalls];
    }
    if (drawType == "Thunderball") {
        numMainBalls = 5;
        mainBallsRange = 39;
        numExtraBalls = 1;
        extraBallsRange = 14;
        extraBalls = [numExtraBalls];
        mainBalls = [numMainBalls];
    }


    //loop for random num of times bet 1 and 100
    loops1 = Math.round(Math.random() * (seed * 1000 - 1) + 1);
    loops2 = Math.round(Math.random() * (seed * 1000 - 1) + 1);

    for (let index = 0; index < loops1; index++) {
        do {
            remover = 34;
            remover2 = 16;
            //res.write('<br>');
            for (i = 0; i < numMainBalls; i++) {
                //for (i=0; )
                num = Math.round(Math.random() * (mainBallsRange - 1) + 1);
                //num = Math.round(Math.random() * r * (mainBallsRange - 1) + 1) - remover;
                //Math.random() * (max - min) + min;

                mainBalls[i] = num;
                console.log(num);
                //res.write(num.toString() + '<br>'); //write a response to the client
            }
            if (hasDuplicates(mainBalls)) {
                console.log("Dupe(s) found in main balls - redraw");
            }
        } while (hasDuplicates(mainBalls));
    }

    for (let index = 0; index < loops2; index++) {

        do {
            //res.write('<br>') //write a response to the client
            console.log("");
            for (i = 0; i < numExtraBalls; i++) {
                num = Math.round(Math.random() * (extraBallsRange - 1) + 1);

                //num = Math.round(Math.random() * r * (extraBallsRange - 1) + 1) - remover2;
                extraBalls[i] = num;
                console.log(num);
                //res.write(num.toString() + '<br>'); //write a response to the client
            }
            if (hasDuplicates(extraBalls)) {
                console.log("Dupe(s) found in extra balls - redraw");
            }
        } while (hasDuplicates(extraBalls));
    }

    mainBalls.sort(function(a, b) {
        return a - b
    });
    extraBalls.sort(function(a, b) {
        return a - b
    });
    mainBalls = mainBalls.concat(" : ");
    var retData = mainBalls.concat(extraBalls);
    return retData;
}