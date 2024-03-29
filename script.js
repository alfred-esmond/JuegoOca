

// PARA LA PAGINA INICIAL

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón con la clase .button-77
    var button = document.querySelector(".button-77");
    // Obtiene el elemento de audio con el id "sonido"
    var sound = document.getElementById("sonido1");

    // Agrega un evento de clic al botón
    button.addEventListener("click", function () {
        // Reproduce el sonido al hacer clic en el botón
        sound.play();
        // Espera 500 milisegundos (medio segundo) antes de redirigir
        setTimeout(function () {
            window.location.href = "juego.html";
        }, 500);
    });
});


// FUNCIÓN PARA LA SELECCION DE PARTICIPANTES Y SU ACTIVACIÓN O INHABILITACIÓN

document.addEventListener("DOMContentLoaded", function () {
    // Función para ajustar los botones de dado según el número de jugadores seleccionado
    function updateDiceButtons() {
        var selectNumeroJugadores = document.getElementById("numeroJugadores");
        var numeroJugadores = parseInt(selectNumeroJugadores.value);
        var botonesDado = document.querySelectorAll(".dado-button");

        botonesDado.forEach(function (boton, index) {
            boton.disabled = (index >= numeroJugadores);
        });
    }

    // Llama a la función al cargar la página
    updateDiceButtons();

    // Agrega un evento de cambio al elemento <select>
    var selectNumeroJugadores = document.getElementById("numeroJugadores");
    selectNumeroJugadores.addEventListener("change", updateDiceButtons);
});




// Función auxiliar para obtener el ID de la ficha correspondiente al jugador
function getFichaId(playerNumber) {
    switch (playerNumber) {
        case 1:
            return "amarilloficha";
        case 2:
            return "verdeficha";
        case 3:
            return "rojoficha";
        case 4:
            return "azulficha";
        default:
            return "";
    }
}


//sonido de click

function playClickSound() {
    var sound = document.getElementById("clickSound");
    sound.play();
  }


// ANIMACIÓN DADO EN PANTALLA

// Función para mostrar el dado animado dentro del contenedor cajatablero
function mostrarDadoEnCajatablero() {
    var dado = document.createElement("img"); // Crea un elemento img
    dado.src = "img/dado.gif"; // Establece la ruta de la imagen GIF del dado
    dado.classList.add("dado-animado"); // Agrega una clase CSS para estilizar el dado animado

    // Agrega el dado al contenedor cajatablero
    var cajatablero = document.querySelector(".cajatablero");
    cajatablero.appendChild(dado);

    // Espera a que la imagen del dado se cargue completamente
    dado.onload = function () {
        // Calcula el centro del contenedor cajatablero después de que la imagen se haya cargado
        var centerX = cajatablero.offsetWidth / 2 - dado.width / 2;
        var centerY = cajatablero.offsetHeight / 2 - dado.height / 2;

        // Centra el dado dentro del contenedor cajatablero
        dado.style.position = "absolute";
        dado.style.left = centerX + "px";
        dado.style.top = centerY + "px";

        // Oculta el dado después de 1 segundo
        setTimeout(function () {
            cajatablero.removeChild(dado); // Elimina el dado del contenedor cajatablero después de 1 segundo
        }, 1000); // (1 segundo)
    };
}


// Llama a la función para agregar el evento de clic a los botones de dado cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    var botonesDado = document.querySelectorAll(".dado-button"); // Selecciona todos los botones de dado

    // Itera sobre cada botón y agrega el evento de clic
    botonesDado.forEach(function (boton) {
        boton.addEventListener("click", function () {
            mostrarDadoEnCajatablero(); // Llama a la función para mostrar el dado animado dentro del contenedor cajatablero
        });
    });
});


// Script para volver al inicio (resetear)
document.getElementById("btnReset").addEventListener("click", function () {
    window.location.href = "juego.html"
});


// FUNCION LANZAR DADO

var players = [
    { number: 1, diceResult: null, position: 0 },
    { number: 2, diceResult: null, position: 0 },
    { number: 3, diceResult: null, position: 0 },
    { number: 4, diceResult: null, position: 0 }
];

// FUNCIÓN PARA LANZAR EL DADO

function lanzarDado(playerNumber) {
    var currentPlayer = players[playerNumber - 1];
    var resultado = Math.floor(Math.random() * 6) + 1;
    currentPlayer.diceResult = resultado;
    currentPlayer.position += resultado;
    var clonedPosition = currentPlayer.position; // Clonar el valor de posición

    var resultadoDiv = document.getElementById("resultado" + playerNumber);

    if (currentPlayer.position >= 60 && currentPlayer.position <= 66) {
        // Reproducir sonido de victoria
        var audio = new Audio('sound/victoria.mp3');
        audio.play();

        // Mostrar imagen de ganador después de un breve retraso
        setTimeout(function () {
            mostrarImagenGanador(playerNumber);
            // Mostrar las posiciones después de un breve retraso
            setTimeout(mostrarPosiciones, 4000);
        }, 1000); // Cambiar este valor según sea necesario
    }

    // Actualizar el div de resultado
    if (currentPlayer.position >= 60) {
        resultadoDiv.textContent = "HAS GANADO!";
        setTimeout(function () {
            window.location.href = "index.html"; // Redirige a index.html después de 7 segundos
        }, 7000);
    } else {
        resultadoDiv.textContent = resultado + " - Posición: " + currentPlayer.position;
    }
    // Llamar a modificarPosicionFicha con la posición clonada
    modificarPosicionFicha(playerNumber, clonedPosition);
}

// Llama a la función para agregar el evento de clic a los botones de dado cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    var botonesDado = document.querySelectorAll(".dado-button"); // Selecciona todos los botones de dado

    // Itera sobre cada botón y agrega el evento de clic
    botonesDado.forEach(function (boton) {
        boton.addEventListener("click", function () {
            mostrarDadoEnCajatablero(); // Llama a la función para mostrar el dado animado dentro del contenedor cajatablero
        });
    });
});

// Función para mostrar las posiciones de los jugadores de mayor a menor
function mostrarPosiciones() {
    // Creamos un array de objetos con las posiciones de los jugadores
    let jugadores = [
        { nombre: 'Jugador1', posicion: players[0].position },
        { nombre: 'Jugador2', posicion: players[1].position },
        { nombre: 'Jugador3', posicion: players[2].position },
        { nombre: 'Jugador4', posicion: players[3].position }
    ];

    // Ordenamos el array por la posición de los jugadores de forma descendente
    jugadores.sort((a, b) => b.posicion - a.posicion);

    // Creamos un mensaje con las posiciones ordenadas
    let mensaje = 'Posiciones de los jugadores:\n';
    jugadores.forEach((jugador, index) => {
        mensaje += `${index + 1}. ${jugador.nombre} - Casilla final: ${jugador.posicion}\n`;
    });

    // Mostramos el mensaje emergente (alert) en pantalla
    setTimeout(function() {
        alert(mensaje);
    }, 4000); // Mostrar el alert después de 4 segundos
}


// FUNCIÓN PARA MOSTRAR LA IMAGEN DE GANADOR POR PANTALLA

function mostrarImagenGanador(playerNumber) {
    var imagenGanador = document.createElement("img");
    imagenGanador.src = "img/ganador" + playerNumber + ".png";
    imagenGanador.id = "imagenGanador"; // Añadir un ID para facilitar su manipulación con CSS
    document.body.appendChild(imagenGanador);

    // Establecer opacidad a 1 después de un breve retraso
    setTimeout(function() {
        imagenGanador.style.opacity = "1";
    }, 100); // Cambiar este valor según sea necesario

    // Llamar a la función para mostrar las posiciones después de mostrar la imagen del ganador
    mostrarPosiciones();
}