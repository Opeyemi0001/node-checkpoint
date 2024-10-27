const http =require('http');

const generator = require('generate-password');

const password = generator.generate({
  length: 5,
  number: true
});
console.log(password);