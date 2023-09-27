/*
const eventListner = require('events');

class MyEmitter extends eventListner{};

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull', ()=>{
    console.log("Please turn off the motor!");
    
    setTimeout(()=>{
        console.log("Please trurn off the motor. Its a remainder!");
    }, 3000);
});

console.log("Do other work until water tank not full");

myEmitter.emit('Waterfull'); // fired event

myEmitter.emit('Waterfull')


*/
//Used in event driven applicatiojn like chat application
//Fire a event when open a file


const fs = require('fs');
var rs = fs.createReadStream('./Code/demo.txt');

rs.on('open', ()=>{
    console.log("File open...");
});

rs.emit('open');




