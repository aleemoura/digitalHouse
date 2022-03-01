const filmes = require('./filmes');
filmes.push('Constantine' , 'O Resgate do Soldado Bryan');

const series = require('./series');
series.pop();
series.pop(); 

console.log(filmes);
console.log(series);