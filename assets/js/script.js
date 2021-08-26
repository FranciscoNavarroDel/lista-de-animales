class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    };

    datospropietario() {
        return `El nombre del dueño es :${this._nombre} ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`
    };
};

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo;
    };

    get tipo() {
        return this._tipo
    };

    getTipo() {
        return `El tipo es ${this.tipo}`
    };
};

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombremascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombremascota = nombremascota;
        this._enfermedad = enfermedad;
    };
    get nombremascota() {
        return this._nombremascota
    };

    set nombremascota(nombremascota) {
        this._nombremascota = nombremascota
    };

    get enfermedad() {
        return this._enfermedad
    };

    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad
    };
};

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const camposformulario = document.querySelectorAll("input,select")
    const [propietario, telefono, direccion, nombremascota, tipo, enfermedad] = [...camposformulario].map((c) => c.value)

    let camporesultado = document.querySelector("#resultado ul")

    if (tipo == "Perro") {
        let Perro = new Mascota(propietario, direccion, telefono, tipo, nombremascota, enfermedad)
        camporesultado.innerHTML = `<li>${Perro.datospropietario()}</li>`
        camporesultado.innerHTML += `<li>${Perro.getTipo()}, mientras que el nombre de la mascota es: ${Perro.nombremascota} y la enfermedad es: ${Perro.enfermedad}</li>`

    } else if (tipo == "Gato") {
        let Gato = new Mascota(propietario, direccion, telefono, tipo, nombremascota, enfermedad)

        camporesultado.innerHTML = `<li>${Gato.datospropietario()}</li>`
        camporesultado.innerHTML += `<li>${Gato.getTipo()}, mientras que el nombre de la mascota es: ${Gato.nombremascota} y la enfermedad es: ${Gato.enfermedad}</li>`

    } else {
        let Conejo = new Mascota(propietario, direccion, telefono, tipo, nombremascota, enfermedad)

        camporesultado.innerHTML = `<li>${Conejo.datospropietario()}</li>`
        camporesultado.innerHTML += `<li>${Conejo.getTipo()}, mientras que el nombre de la mascota es: ${Conejo.nombremascota} y la enfermedad es: ${Conejo.enfermedad}</li>`

    };

})