const number = 15;

let miPromesa = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("Éxito: El número es mayor que 10");
  } else {
    reject("Error: El número no es mayor que 10");
  }
});

miPromesa.then((val) => console.log(val)).catch((err) => console.error(err));
