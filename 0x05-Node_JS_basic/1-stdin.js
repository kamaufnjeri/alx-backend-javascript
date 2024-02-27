// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Trim to remove any leading/trailing whitespace
  if (name) {
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit(); // Exit the program
  }
});

process.on('exit', () => {
});
