class Persona {
    constructor(nombre, apellido, identificacion, estadoCivil) {
        this.nombre = nombre;
        this.apellido = apellidos;
        this.identificacion = identificacion;
        this.estadoCivil = estadoCivil;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, identificacion, estadoCivil, añoIncorporacion, numeroDespacho) {
        super(nombre, apellido, identificacion, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellido, identificacion, estadoCivil, cursoMatriculado) {
        super(nombre, apellido, identificacion, estadoCivil);
        this.cursoMatriculado = cursoMatriculado;
    }
}

class Profesor extends Empleado {
    constructor(nombre, apellido, identificacion, estadoCivil, añoIncorporacion, numeroDespacho, departamento) {
        super(nombre, apellido, identificacion, estadoCivil, añoIncorporacion, numeroDespacho);
        this.departamento = departamento;
    }
}

class PersonalServicio extends Empleado {
    constructor(nombre, apellido, identificacion, estadoCivil, añoIncorporacion, numeroDespacho, seccionAsignada) {
        super(nombre, apellido, identificacion, estadoCivil, añoIncorporacion, numeroDespacho);
        this.seccionAsignada = seccionAsignada;
    }
}

class Persona {    // constructor y atributos

    cambiarEstadoCivil(nuevoEstadoCivil) {
        this.estadoCivil = nuevoEstadoCivil;
    }

    reasignarDespacho(nuevoDespacho) {
        this.numeroDespacho = nuevoDespacho;
    }

    imprimirInformacion() {
        console.log(`Nombre: ${this.nombre} ${this.apellidos}`);
        console.log(`Identificacion: ${this.identificacion}`);
        console.log(`Estado Civil: ${this.estadoCivil}`);
    }
}

class CentroEducativo {
    constructor() {
        this.personas = [];
    }

    darDeAlta(persona) {
        this.personas.push(persona);
    }

    darDeBaja(identificacion) {
        this.personas = this.personas.filter(persona => persona.identificacion !== identificacion);
    }

    imprimirInformacion() {
        this.personas.forEach(persona => persona.imprimirInformacion());
    }
}

const centroEducativo = new CentroEducativo();




function mostrarMenu() {
    console.log("1. Dar de alta una persona");
    console.log("2. Dar de baja una persona");
    console.log("3. Listar informacion de todas las personas");
    console.log("4. Salir");
}

function ejecutarOpcion(opcion) {
    switch(opcion) {
        case "1":
            darDeAltaPersona();
            break;
        case "2":
            darDeBajaPersona();
            break;
        case "3":
            listarInformacion();
            break;
        case "4":
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}

function darDeAltaPersona() {
    const tipoPersona = prompt("Ingrese el tipo de persona (Estudiante/Profesor/Personal de Servicio):");
    const nombre = prompt("Ingrese el nombre:");
    const apellido = prompt("Ingrese el apellido:");
    const identificacion = prompt("Ingrese la identificación:");
    const estadoCivil = prompt("Ingrese el estado civil:");
    
    switch(tipoPersona.toLowerCase()) {
        case "estudiante":
            const cursoMatriculado = prompt("Ingrese el curso matriculado:");
            const estudiante = new Estudiante(nombre, apellido, identificacion, estadoCivil, cursoMatriculado);
            centroEducativo.darDeAlta(estudiante);
            break;
        case "profesor":
            const añoIncorporacionP = prompt("Ingrese el año de incorporación:");
            const numeroDespachoP = prompt("Ingrese el número de despacho:");
            const departamento = prompt("Ingrese el departamento:");
            const profesor = new Profesor(nombre, apellido, identificacion, estadoCivil, añoIncorporacionP, numeroDespachoP, departamento);
            centroEducativo.darDeAlta(profesor);
            break;
        case "personal de servicio":
            const añoIncorporacionS = prompt("Ingrese el año de incorporación:");
            const numeroDespachoS = prompt("Ingrese el número de despacho:");
            const seccionAsignada = prompt("Ingrese la sección asignada:");
            const personalServicio = new PersonalServicio(nombre, apellido, identificacion, estadoCivil, añoIncorporacionS, numeroDespachoS, seccionAsignada);
            centroEducativo.darDeAlta(personalServicio);
            break;
        default:
            console.log("Tipo de persona no válido.");
            break;
    }
}

function darDeBajaPersona() {
    const identificacion = prompt("Ingrese la identificación de la persona que desea dar de baja:");
    centroEducativo.darDeBaja(identificacion);
}

function listarInformacion() {
    centroEducativo.imprimirInformacion();
}

function iniciarPrograma() {
    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Ingrese el numero de la opcion que desea ejecutar:");
        ejecutarOpcion(opcion);
    } while (opcion !== "4");
}

// iniciar el programa
iniciarPrograma();

// ejemplo de uso de metodos de arreglo
// ordenar alfabeticamente por apellidos
centroEducativo.personas.sort((a, b) => a.apellidos.localeCompare(b.apellidos));

// filtrar por tipo de persona
const estudiantes = centroEducativo.personas.filter(persona => persona instanceof Estudiante);

// buscar por numero de identificación
const buscarPersona = (identificacion) => centroEducativo.personas.find(persona => persona.identificacion === identificacion);


function mostrarMenu() {
    console.log("1. Dar de alta una persona");
    console.log("2. Dar de baja una persona");
    console.log("3. Listar informacion de todas las personas");
    console.log("4. Salir");
}

function ejecutarOpcion(opcion) {
    switch(opcion) {
        case "1":
            darDeAltaPersona();
            break;
        case "2":
            darDeBajaPersona();
            break;
        case "3":
            listarInformacion();
            break;
        case "4":
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}

function darDeAltaPersona() { // info necesaria pa crear una persona
}

function darDeBajaPersona() { // numero de identificacion de la persona pa dar de baja y sacarla de c.educativo
}

function listarInformacion() { // imprime la info de todas las personas en el centro educativo
}

function iniciarPrograma() {
    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Ingrese el numero de la opcion que desea ejecutar:");
        ejecutarOpcion(opcion);
    } while (opcion !== "4");
}

// iniciar el programa
iniciarPrograma();
