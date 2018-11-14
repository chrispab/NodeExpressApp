// var http = require('http');


// var express = require('express');
// var bodyParser = require('body-parser');
// var app     = express();


//var sys = require('sys');
//default is "T"
var numBalls = 5;
var bRange = 39;
var eBalls = 1;
var eBRange = 14;
//var balls = [numBalls];
var extraBalls = [eBalls];
var myNumbers = [numBalls];

//var type = "L";
//var type = "E";
var type = "T";





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


// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
function getNumbers(drawType) {
    if (type == "L") {
        numBalls = 6;
        bRange = 59;
        eBalls = 0;
        eBRange = 0;
    }
    if (type == "E") {
        numBalls = 5;
        bRange = 50;
        eBalls = 2;
        eBRange = 12;
    }
    do {
        res.write('<br>');
        for (i = 0; i < numBalls; i++) {
            num = Math.round(Math.random() * (bRange - 1) + 1);
            myNumbers[i] = num;
            console.log(num);
            res.write(num.toString() + '<br>'); //write a response to the client
        }
    } while (hasDuplicates(myNumbers));

    do {
        res.write('<br>') //write a response to the client
        console.log("");
        for (i = 0; i < eBalls; i++) {
            num = Math.round(Math.random() * (eBRange - 1) + 1);
            extraBalls[i] = num;
            console.log(num);
            res.write(num.toString() + '<br>'); //write a response to the client
        }
    } while (hasDuplicates(extraBalls));
    return myNumbers;
}

//     res.write('<br>')
//     console.log("");
//     res.end(); //end the response
//}).listen(8888);
console.log('Server running at http://127.0.0.1:8080/');