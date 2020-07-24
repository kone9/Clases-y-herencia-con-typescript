import { Camion } from "./Camion.js";
//import Camion = require("Camion");
/** @description Esta CLase representa por donde inicia el programa,"llamada Main",su metodo es estatico y se inicia sin instanciar la clase".
 */
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.Main = function () {
        var htmlElemento = document.getElementById("texto");
        htmlElemento.textContent = "hola mundo desde Typescript en la pantalla usando Clases y el Método Main";
        var camion = new Camion("rojo", "mercedes", 130, 100000);
        htmlElemento = document.getElementById("texto2");
        htmlElemento.textContent = "Cambiando el texto de nuevo reutilzando la variable html element";
        console.log("Funciona perfectamente la herencía");
    };
    return Main;
}());
/** @description Uso el método main static para iniciar el programa ¡"NO BORRAR SINO NO INICIA"!".*/
Main.Main();
