class Serie {
  constructor(nombre, personajes = []) {
    this.nombre = nombre;
    this.personajes = personajes;
  }
  // Debe inyectar html para renderizar la card de personaje
  getPersonajes() {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12">
          
        </div>
      </div>
    </div>
    `
  }
  // this.personajes es una arreglo!
  agregarPersonajes(personaje) {
    // Si el parámetro es un objeto o un string
    this.personajes.push(personaje);
  }
}

export default Serie;