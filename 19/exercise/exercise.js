//Este metodo lo improvise mirando ejemplos
// no uso SetInterval pero me gusta más porque no entra en bucle.

function printAsyncName(callback, nombre) {
  setTimeout(function () {
    callback();
  }, 1000);
  setTimeout(function () {
    console.log(nombre);
  }, 2000);
}

function miCallback() {
  console.log("Hola");
}

printAsyncName(miCallback, "Mundo :D");

// OTRO METODO

// function printAsyncName(callback, nombre) {

//     setInterval(function() {
//       callback();
//     }, 1000);

//     setTimeout(function() {
//       console.log(nombre);
//     }, 2000);
//   }

//   function miCallback() {
//     console.log("Hola");
//   }

//   printAsyncName(miCallback, "Mundo");

// OTRO METODO

// function printAsyncName(callback, name) {
//     setInterval(callback, 1000);
//     setInterval(() => console.log(name), 2000);
// }

// printAsyncName(() => console.log("Hola"), "Mundo hah")
