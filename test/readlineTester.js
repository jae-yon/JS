const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;

rl.on('line', (line) => {
	input = line;
  rl.close();
}).on('close', () => {
	console.log(input.charCodeAt());
});