export function saludoPersonalizadoESP(nombre, edad, genero) {
    let saludo = "";
    if(edad > 30) {
        if(genero === "masculino") {
            saludo += "<p>Hola, señor ";
            }
        if(genero === "femenino") {
            saludo += "<p>Hola, señora ";
        }
    }
        else {
        if(genero === "masculino") {
            saludo += "<p>Hola, joven ";
            }
        if(genero === "femenino") {
            saludo += "<p>Hola, señorita ";
        }
    }
    saludo = saludo + nombre + "</p>";
    return saludo;
}

export function saludoPersonalizadoENG(nombre, edad, genero) {
    let saludo = "";
    if(edad > 30) {
        if(genero === "masculino") {
            saludo += "<p>Hello, Mr. ";
        }
        if(genero === "femenino") {
            saludo += "<p>Hello Mrs. ";
        }
    }
    else {
        if(genero === "masculino") {
            saludo += "<p>Hello young gentleman ";
        }
        if(genero === "femenino") {
            saludo += "<p>Hello Miss. ";
        }
    }
    saludo = saludo + nombre + "</p>";
    return saludo;
}