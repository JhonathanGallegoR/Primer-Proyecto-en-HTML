// Objeto Persona:
var persona = {
  nombre: "Jhonathan",
  apellidos: "Gallego Rojas",
  edad: 25,
};

// For in -> para recorrer objetos
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

// For f -> para recorrer arreglos
var arreglo = [1, 2, 3, 4, 5];
for (let valor of arreglo) {
  console.log(valor);
}

// Ejercicios:
/**
 * 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

* 2.Realice el equivalente con la declaración while y do-while
 */
for (let contador = 2; contador <= 20; contador += 2) {
  console.log(contador);
}
