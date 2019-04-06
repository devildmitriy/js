'use strict';
var number = 5;
var string = 'hellow';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
console.log(4/0);
console.log('string'*3);

let dude = {
    name: 'dude',
    age: 25,
    isMarried: false
};

console.log(dude["isMarried"]);

// alert(dude.name + ', whats up ?');

/* let isOk = confirm(dude.name + ' you are ok?');
if (isOk) {
    alert('ok'); 
} else{
    alert('=((');
} */

let message = prompt('how old you?','lol');
alert(message);25

