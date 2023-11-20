process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit(0); // Exit the program after displaying the name
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});