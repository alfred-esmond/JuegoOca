//Función que convierte los datos de la cuadricula del excel en valores para cambiar al character1,2,3,4
//Creada para ajustar lo mejor posible al tablero cada uno de los movimientos

function modificarPosicionFicha(playerNumber, position) {
    var fichaId = getFichaId(playerNumber);
    var fichaElement = document.getElementById(fichaId);

    switch (position) {
        case 24:
            fichaElement.style.left = '60px';
            fichaElement.style.top = '16px';
            break;
        case 23:
            fichaElement.style.left = '139px';
            fichaElement.style.top = '16px';
            break;
        case 22:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '16px';
            break;
        case 21:
            fichaElement.style.left = '304px';
            fichaElement.style.top = '16px';
            break;
        case 20:
            fichaElement.style.left = '385px';
            fichaElement.style.top = '16px';
            break;
        case 19:
            fichaElement.style.left = '465px';
            fichaElement.style.top = '16px';
            break;
        case 18:
            fichaElement.style.left = '548px';
            fichaElement.style.top = '16px';
            break;
        case 17:
            fichaElement.style.left = '627px';
            fichaElement.style.top = '16px';
            break;
        case 16:
            fichaElement.style.left = '711px';
            fichaElement.style.top = '16px';
            break;
        case 15:
            fichaElement.style.left = '793px';
            fichaElement.style.top = '16px';
            break;
        case 25:
            fichaElement.style.left = '60px';
            fichaElement.style.top = '90px';
            break;
        case 46:
            fichaElement.style.left = '139px';
            fichaElement.style.top = '90px';
            break;
        case 45:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '90px';
            break;
        case 44:
            fichaElement.style.left = '304px';
            fichaElement.style.top = '90px';
            break;
        case 43:
            fichaElement.style.left = '385px';
            fichaElement.style.top = '90px';
            break;
        case 42:
            fichaElement.style.left = '465px';
            fichaElement.style.top = '90px';
            break;
        case 41:
            fichaElement.style.left = '548px';
            fichaElement.style.top = '90px';
            break;
        case 40:
            fichaElement.style.left = '627px';
            fichaElement.style.top = '90px';
            break;
        case 39:
            fichaElement.style.left = '711px';
            fichaElement.style.top = '90px';
            break;
        case 14:
            fichaElement.style.left = '793px';
            fichaElement.style.top = '90px';
            break;
        case 26:
            fichaElement.style.left = '60px';
            fichaElement.style.top = '165px';
            break;
        case 47:
            fichaElement.style.left = '139px';
            fichaElement.style.top = '165px';
            break;
        case 60:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 61:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 62:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 63:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 64:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 65:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 66:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '165px';
            break;
        case 59:
            fichaElement.style.left = '304px';
            fichaElement.style.top = '165px';
            break;
        case 58:
            fichaElement.style.left = '385px';
            fichaElement.style.top = '165px';
            break;
        case 57:
            fichaElement.style.left = '465px';
            fichaElement.style.top = '165px';
            break;
        case 56:
            fichaElement.style.left = '548px';
            fichaElement.style.top = '165px';
            break;
        case 55:
            fichaElement.style.left = '627px';
            fichaElement.style.top = '165px';
            break;
        case 38:
            fichaElement.style.left = '711px';
            fichaElement.style.top = '165px';
            break;
        case 13:
            fichaElement.style.left = '793px';
            fichaElement.style.top = '165px';
            break;
        case 27:
            fichaElement.style.left = '60px';
            fichaElement.style.top = '238px';
            break;
        case 48:
            fichaElement.style.left = '139px';
            fichaElement.style.top = '238px';
            break;
        case 49:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '238px';
            break;
        case 50:
            fichaElement.style.left = '304px';
            fichaElement.style.top = '238px';
            break;
        case 51:
            fichaElement.style.left = '385px';
            fichaElement.style.top = '238px';
            break;
        case 52:
            fichaElement.style.left = '465px';
            fichaElement.style.top = '238px';
            break;
        case 53:
            fichaElement.style.left = '548px';
            fichaElement.style.top = '238px';
            break;
        case 54:
            fichaElement.style.left = '627px';
            fichaElement.style.top = '238px';
            break;
        case 37:
            fichaElement.style.left = '711px';
            fichaElement.style.top = '238px';
            break;
        case 12:
            fichaElement.style.left = '793px';
            fichaElement.style.top = '238px';
            break;
        case 28:
            fichaElement.style.left = '60px';
            fichaElement.style.top = '316px';
            break;
        case 29:
            fichaElement.style.left = '139px';
            fichaElement.style.top = '316px';
            break;
        case 30:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '316px';
            break;
        case 31:
            fichaElement.style.left = '304px';
            fichaElement.style.top = '316px';
            break;
        case 32:
            fichaElement.style.left = '385px';
            fichaElement.style.top = '316px';
            break;
        case 33:
            fichaElement.style.left = '465px';
            fichaElement.style.top = '316px';
            break;
        case 34:
            fichaElement.style.left = '548px';
            fichaElement.style.top = '316px';
            break;
        case 35:
            fichaElement.style.left = '627px';
            fichaElement.style.top = '316px';
            break;
        case 36:
            fichaElement.style.left = '711px';
            fichaElement.style.top = '316px';
            break;
        case 11:
            fichaElement.style.left = '793px';
            fichaElement.style.top = '316px';
            break;
        case 1:
            fichaElement.style.left = '60px';
            fichaElement.style.top = '382px';
            break;
        case 2:
            fichaElement.style.left = '139px';
            fichaElement.style.top = '382px';
            break;
        case 3:
            fichaElement.style.left = '221px';
            fichaElement.style.top = '382px';
            break;
        case 4:
            fichaElement.style.left = '304px';
            fichaElement.style.top = '382px';
            break;
        case 5:
            fichaElement.style.left = '385px';
            fichaElement.style.top = '382px';
            break;
        case 6:
            fichaElement.style.left = '465px';
            fichaElement.style.top = '382px';
            break;
        case 7:
            fichaElement.style.left = '548px';
            fichaElement.style.top = '382px';
            break;
        case 8:
            fichaElement.style.left = '627px';
            fichaElement.style.top = '382px';
            break;
        case 9:
            fichaElement.style.left = '711px';
            fichaElement.style.top = '382px';
            break;
        case 10:
            fichaElement.style.left = '793px';
            fichaElement.style.top = '382px';
            break;

        default:
            break;
    }
}

