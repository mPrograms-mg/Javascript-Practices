// SetInterval

function log() {
  console.log("Thi is a setInterval");
}

const closeInterval = setInterval(log, 1000);

setTimeout(() => {
  clearInterval(closeInterval);
}, 2000);
