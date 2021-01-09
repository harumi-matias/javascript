
// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Calculadora Suma, Resta, Multiplicacion y Division
// empleando condicionales si-entonces (IF-THEN)
function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	// Ingresar la opcion a realizar
	alert("Posibles operaciones a realizar: \n1: Sumar\n 2:Restar\n3: Multiplicar\n4: Dividir");

	// De acuerdo a la eleccion se compara contra cada una de las
	// opciones para realizarla y terminar el programa
	opcion_num = Number (prompt("Que operacion deseas realizar? :",));
	// Operaci�n: Suma
	if (opcion_num==1) {
		numero01=Number(prompt("Ingresar el primer valor",));
		numero02=Number(prompt("Ingresar el segundo valor",));
		resultado = numero01+numero02;
		alert("La suma de",numero01,"+",numero02,"=",resultado,);
	} else {
		// Operacion: resta
		if (opcion_num==2) {
			numero01=Number(prompt("Ingresar el primer valor",));
		    numero02=Number(prompt("Ingresar el segundo valor",));
			resultado = numero01-numero02;
			alert("La resta de",numero01,"-",numero02,"=",resultado,);
		} else {
			// Operacion: Multiplicacion
			if (opcion_num==3) {
				numero01=Number(prompt("Ingresar el primer valor",));
		        umero02=Number(prompt("Ingresar el segundo valor",));
				resultado = numero01*numero02;
				alert("La multiplicacion de",numero01,"x",numero02,"=",resultado,);
			} else {
				// Operacion: Division
				if (opcion_num==4) {
					numero01=Number(prompt("Ingresar el primer valor",));
		            numero02=Number(prompt("Ingresar el segundo valor",));
					resultado = numero01/numero02;
					document.write("La division de",numero01,"/",numero02,"=",resultado,'<BR/>');
				}
			}
		}
	}
}


// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de condicional switch para identificar
// si un numero esta dentro de un rango sugerido y visualizar
// el mes del calendario
function mescalendario() {
	var numeromes;
	numeromes = Number(prompt("Ingresar el numero entre el 1 y el 12, para visualizar el mes"));
	// Se desplegara el mes de acuerdo al numero elegido
	// En caso que no sea ninguna de las opciones validas
	// se solicitara reiniciar el programa
	switch (numeromes) {
	case 1:
		alert("N�mero de mes v�lido \n El mes es ENERO");
		break;
	case 2:
		alert("N�mero de mes v�lido \n El mes es FEBRERO");
		break;
	case 3:
		alert("N�mero de mes v�lido \n El mes es MARZO");
		break;
	case 4:
		alert("N�mero de mes v�lido \n El mes es ABRIL");
		break;
	case 5:
		alert("N�mero de mes v�lido \n El mes es MAYO");
		break;
	case 6:
		alert("N�mero de mes v�lido \n El mes es JUNIO");
		break;
	case 7:
		alert("N�mero de mes v�lido \n El mes es JULIO");
		break;
	case 8:
		alert("N�mero de mes v�lido \n El mes es AGOSTO");
		break;
	case 9:
        alert("N�mero de mes v�lido \n El mes es SEPTIEMBRE");
		break;
	case 10:
        alert("N�mero de mes v�lido \n El mes es OCTUBRE");
		break;
	case 11:
        alert("N�mero de mes v�lido \n El mes es NOVIEMBRE");
		break;
	case 12:
        alert("N�mero de mes v�lido \n El mes es DICIEMBRE");
		break;
	default:
		alert("Fallaste, número no válido, intenta de nuevo", '<BR/>');
	}
}


// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de los condicionales while (Mientras)
// y if-then (si-entonces) para realizar la suma de los n�meros
// pares y los impares
function sumaparimpar() {
	var i, suma_impar, suma_par;
	// se declaran varianles de apoyo para nuestro programa
	// i es nuestro contador principal
	// conviene que se inicie en 1 es decir 1<-1
	// suma_par llevar� una acumulacion de la suma numeros pares
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
	alert("La suma de los primeros 100 numeros pares es: " + suma_par);
	alert("La suma de los primeros 100 numeros impares es: " + suma_impar);
}

// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de ciclos for Para 
// imprimir la tabla de multiplicar de un numero
// ingresado por el usuario
function tablamultiplicar() {
	var contador01, numero01;
	numero01 = Number(prompt("Ingresar un n�mero para generar su tabla de multiplicar"));
	// Con este ciclo se genera la multiplicacion del numero ingresado
	// en cada iteracion por el valor del contador (variable de control)
	// desde 1 hasta llegar a 10 de uno en uno
	for (contador01=1;contador01<=10;contador01++) {
		alert(numero01,"x",contador01,"=",(numero01*contador01));
	}
}

// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de la sentencia repetir para determinar
// de un conjunto de 10 personas si tienen derecho a jubilarse,
// considerando su genero, edad y a�ps de aportacion al seguro social.
// Restricciones:
// I. Las mujeres deben tener mas de 60 a�os
// II. Los hombres deben tener mas de 65 a�os
// III. Para todos, los a�os de aportaci�n deben ser de mayores de 20
function jubilacion() {
	var aportacion, edad, genero, persona;
	persona = 1;
	do {
		alert ("Datos de la persona...",persona,'<BR/>');
		// Se desplegara en pantalla un mensaje al usuario solicitando los datos de la persona
		aportacion = Number (prompt ("�Cu�ntos a�os lleva aportando (n�mero entero)?",));
		aportacion = prompt();
		document.write("Qu� edad tiene actualmente (numero entero)?",'<BR/>');
		edad = prompt();
		document.write("Es mujer u hombre (M=Mujer, H=Hombre)?",'<BR/>');
		genero = prompt();
		if (aportacion>20) {
			// Si se cumple con mas de 20 a�os de aportaci�n se verifica si es mujer 
			// u hombre para validar su edad y determinar si le corresponde jubilaci�n
			if (genero=="M" || genero=="m") {
				if (edad>60) {
					document.write("SI tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilaci�n",'<BR/>');
				}
			} else {
				if (edad>65) {
					document.write("SI tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilaci�n",'<BR/>');
				}
			}
		} else {
			document.write("NO tiene derecho a la jubilaci�n",'<BR/>');
		}
		document.write("Siguiente consulta...",'<BR/>');
		// Aumentar en uno el contador principal 
		persona = persona+1;
	} while (persona!==11);
}


