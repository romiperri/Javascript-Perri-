//Ciclo for
let comidaFavorita = "Hamburguesa";

for (let i = 0; i < 3; i++) {
    let comidaUsuario = prompt("¿Cual es la comida favorita de Nina? \n1 - Papas \n2 - Hamburguesa \n3 - Fideos \n4 - Milanesa");
    if (comidaFavorita == comidaUsuario) {
        alert("¡Muy bien! a Nina le encantan las hamburguesas.");
        break;
    }
    alert("mmm cerca, intentá otra vez");
}
