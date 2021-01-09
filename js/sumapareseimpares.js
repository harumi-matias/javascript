// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de los condicionales while (Mientras)
// y if-then (si-entonces) para realizar la suma de los números
// pares y los impares
function sumaparimpar() {
	var i, suma_impar, suma_par;
	// se declaran varianles de apoyo para nuestro programa
	// i es nuestro contador principal
	// conviene que se inicie en 1 es decir 1<-1
	// suma_par llevará una acumulacion de la suma numeros pares
	// se inicia en 0, suma_par<-0
	// suma_impar llevara una acumulacion de la suma numeros impares
	// se inicia en 0, suma_impar<-0
	i = 1;
	suma_par = 0;
	suma_impar = 0;
	// se realizara este proceso de
	while (1<101) {
		// si el reciduo de dividir el valor actual es i entre 2
		// es cero, se suma el valor actual de i a la suma_par
		// de lo contratio, se suma a la suma_impar
		if (i%2==0) {
			suma_par = suma_par+i;
		} else {
			suma_par = suma_impar+i;
		}
	}
	// se incrementa el valor del contador principal
	i = i+1;
	document.write("La suma de los primeros 100 numeros pares es..",'<BR/>');
	document.write(suma_par,'<BR/>');
	document.write("La suma de los primeros 100 numeros impares es..",'<BR/>');
	document.write(suma_impar,'<BR/>');
}

