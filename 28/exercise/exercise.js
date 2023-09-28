const user = {
  id: 1,
  name: "John",
  age: 25,
};

function guardarUsuario() {
  const userJSON = JSON.stringify(user);

  localStorage.setItem("user", userJSON);

  console.log("El objeto usuario se ha guardado en localStorage.");
}

guardarUsuario();

// Da error por el localStorage , tengo entendido que es normal por lo que he investigado pero no estoy seguro
