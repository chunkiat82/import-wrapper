import replacer from 'require-replacer';
import b from './module2';

replacer.replace(function around(methodCall) { 
    console.log('module hijacked');
    console.log(methodCall.args);
}, './module1');

// import a from './module1';
var a = require('./module1');

a(1,2,3);
b();
