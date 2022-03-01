const fs = require('fs');
let moment = require('moment');

const superHerois = require('./superHerois')

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8');
let data = moment().format('MM do YY');

console.log(superHerois);