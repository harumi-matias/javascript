// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Calculadora Suma, Resta, Multiplicacion y Division
// empleando condicionales si-entonces (IF-THEN)
function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	// Ingresar la opcion a realizar
	document.write("Posibles operaciones a realizar:",'<BR/>');
	document.write("1. Sumar",'<BR/>');
	document.write("2. Restar",'<BR/>');
	document.write("3. Multiplicar",'<BR/>');
	document.write("4. Dividir",'<BR/>');
	// De acuerdo a la eleccion se compara contra cada una de las
	// opciones para realizarla y terminar el programa
	document.write("�Que operacion deseas realizar? :",'<BR/>');
	opcion_num = prompt();
	// Operaci�n: Suma
	if (opcion_num==1) {
		document.write("Ingresar el primer valor",'<BR/>');
		numero01 = Number(prompt());
		document.write("Ingresar el segundo valor",'<BR/>');
		numero02 = Number(prompt());
		resultado = numero01+numero02;
		document.write("La suma de",numero01,"+",numero02,"=",resultado,'<BR/>');
	} else {
		// Operacion: resta
		if (opcion_num==2) {
			document.write("Ingresar el primer valor",'<BR/>');
			numero01 = Number(prompt());
			document.write("Ingresar el segundo valor",'<BR/>');
			numero02 = Number(prompt());
			resultado = numero01-numero02;
			document.write("La resta de",numero01,"-",numero02,"=",resultado,'<BR/>');
		} else {
			// Operacion: Multiplicacion
			if (opcion_num==3) {
				document.write("Ingresar el primer valor",'<BR/>');
				numero01 = Number(prompt());
				document.write("Ingresar el segundo valor",'<BR/>');
				numero02 = Number(prompt());
				resultado = numero01*numero02;
				document.write("La multiplicacion de",numero01,"x",numero02,"=",resultado,'<BR/>');
			} else {
				// Operacion: Division
				if (opcion_num==4) {
					document.write("Ingresar el primer valor",'<BR/>');
					numero01 = Number(prompt());
					document.write("Ingresar el segundo valor",'<BR/>');
					numero02 = Number(prompt());
					resultado = numero01/numero02;
					document.write("La division de",numero01,"/",numero02,"=",resultado,'<BR/>');
				}
			}
		}
	}
}

