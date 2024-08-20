export function saludoPersonalizado(nombre, genero, edad) {
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
