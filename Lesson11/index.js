import { name } from './module';
import './style.css';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import { toDate } from 'validator';
import moment from 'moment/moment';

//console.log("Your name: " + name);

var validator = require('validator');

validator.isEmail('foo@bar.com');

//console.log(validator.isEmail('foo@bar.com')); 

console.log(isEmail('foo@bar.com')); 
console.log(isURL("dsdsds"));
console.log(isURL("https://testprovider.com/ua/catalog/js-online-ua"));
console.log(toDate("12.12.2000"));

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('MMMM Do YY'));