const times = process.argv.slice(2);

for (let time of times) {
  time = Number(time)
  if (time >= 0 && !isNaN(time)) {
    setTimeout(() => {
      process.stdout.write('beep');
    }, time * 1000);
  } 
};

 
