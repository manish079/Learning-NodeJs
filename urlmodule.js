
// let url = require('url')

const myURL = new URL('https://google.com');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL.host);
console.log(myURL.href);

myURL.password = '1234'
console.log(myURL.password);
console.log(myURL.href);

myURL.port = 8081;   //Set port number
console.log(myURL.port);

console.log(myURL.href);

//protocol:- 
console.log(myURL.protocol);

//custom protocol
myURL.protocol = 'ftp' //file transfer protocol
console.log(myURL.protocol);
console.log(myURL.href);

//Whay would be the search query
console.log(myURL.search);

//set query
myURL.search = "explain databse and its types"
console.log(myURL.href);