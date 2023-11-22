process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString();
  process.stdout.write(`Your name is: ${input}`);

  if (process.stdin.isTTY) {
    process.exit();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
