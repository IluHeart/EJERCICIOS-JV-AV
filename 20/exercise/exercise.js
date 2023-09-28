function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

repeatHello(() => console.log("hola"));

// Utilizamos setInterval para ejecutar la función de retorno de llamada
// con un intervalo de 1 segundo (1000 milisegundos).
// `setInterval llama en blucle al callback`
