const phases = ["|", "/", "-", "\\", "|", "/", "-", "\\"];

let when = 0;
for (const char of phases) {
  when += 200;
  // console.log(char, when);
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, when);
}