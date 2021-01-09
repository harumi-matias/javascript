// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de condicional switch para identificar
// si un numero esta dentro de un rango sugerido y visualizar
// el mes del calendario
function mescalendario() {
	var numeromes;
	document.write("Ingresar el numero entre el 1 y el 12, para visualizar el mes",'<BR/>');
	numeromes = Number(prompt());
	// Se desplegara el mes de acuerdo al numero elegido
	// En caso que no sea ninguna de las opciones validas
	// se solicitara reiniciar el programa
	switch (numeromes) {
	case 1:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es ENERO",'<BR/>');
		break;
	case 2:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es FEBRERO",'<BR/>');
		break;
	case 3:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es MARZO",'<BR/>');
		break;
	case 4:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es ABRIL",'<BR/>');
		break;
	case 5:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es MAYO",'<BR/>');
		break;
	case 6:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es JUNIO",'<BR/>');
		break;
	case 7:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es JULIO",'<BR/>');
		break;
	case 8:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es AGOSTO",'<BR/>');
		break;
	case 9:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es SEPTIEMBRE",'<BR/>');
		break;
	case 10:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es OCTUBRE",'<BR/>');
		break;
	case 11:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es NOVIEMBRE",'<BR/>');
		break;
	case 12:
		document.write("N�mero de mes v�lido",'<BR/>');
		document.write("El mes es DICIEMBRE",'<BR/>');
		break;
	default:
		document.write("N�mero de mes inv�lido",'<BR/>');
		document.write("Coloca un n�mero v�lido del 1 al 12",'<BR/>');
	}
}

