// 0 === JAN 1st 1970 00:00:00 am

const moment = require('moment');

// Jan 3rd, 
let createdAt = 123456;
let date1 = moment(createdAt);
date1.add(10, 'year').subtract(5, 'month');
console.log(date1.format('MMM Do, YYYY'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

// 10:28 pm
let date2 = moment();
date2.subtract(18, 'minutes');
console.log(date2.format('h:mm a'));

// let date = new Date();
// console.log(date.getMonth());
