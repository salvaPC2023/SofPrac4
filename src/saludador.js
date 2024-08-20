export function saludoPersonalizado(nombre, genero) {
    let saludo = "";
    if(genero === "masculino") {
        saludo += "<p>Hola, Señor ";
        }
    if(genero === "femenino") {
        saludo += "<p>Hola, Señora ";
    }
    saludo = saludo + nombre + "</p>";
    return saludo;
}
