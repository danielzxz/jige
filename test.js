var jige = require('./jige.js');

var randomList = jige.randomArray(10,[0,9],false);
console.log(randomList);

var md5 = jige.md5('To be encrypted.');
console.log(md5);