function grandPapa() {
  const iceCandy = 4;

  function grandSon() {
    console.log("Grande pa give me iceCanday.", iceCandy);
  }
  grandSon();
}
grandPapa();

// function grandPapa() {
//   const iceCandy = 4;

//   return function grandSon() {
//     console.log("Grandpa give me iceCandy:", iceCandy);
//   };
// }

// const son = grandPapa(); // grandPapa finishes
// son(); // but grandSon still remembers iceCandy → closure
