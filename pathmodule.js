
const path = require('path')

let p = path.basename('c:\\Desktop\\Newfolder\\Harry\\Code\\pathmodule.js')
console.log(p);

console.log(path.dirname('c:\\Desktop\\Newfolder\\Harry\\Code\\pathmodule.js'));

//Tell us about extension
console.log(path.extname('index.html'));

console.log(path.join('/home', 'bar', 'file/doc', 'demo', '..'));

console.log(path.join('/home', 'bar', 'file/doc', 'demo', '.')); 
