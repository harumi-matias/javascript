//SUMA

function suma() {
    var numero01, numero02, resultado;


    //en el alert escribirá la frase "suma simple..." - se pone "number" para que lo reconozca como numero
    numero01 = Number(prompt("Suma simple, ingresar el primer número: "));


    numero02 = Number(prompt("Ingresar el segudo número: "));

    resultado = numero01 + numero02;


    // se concatena con una "coma" 
    alert("el resultado de la suma es:" + resultado);
}


//SIGNO

function signo() {
    var numero01;

    numero01 = Number(prompt("Ingresa un número, determinaremos si es positivo o negativo"));
    if (numero01 >= 0) {
        alert("El número es POSITIVO");
    } else {
        alert("El número es NEGATIVO");
    }
}

//CALCULADORA

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
		alert("El resultado de la suma es:" + resultado);
	} else {
		// Operacion: resta
		if (opcion_num==2) {
			numero01=Number(prompt("Ingresar el primer valor",));
		    numero02=Number(prompt("Ingresar el segundo valor",));
			resultado = numero01-numero02;
			alert("El resultado de la resta es:" + resultado);
		} else {
			// Operacion: Multiplicacion
			if (opcion_num==3) {
				numero01=Number(prompt("Ingresar el primer valor",));
		        umero02=Number(prompt("Ingresar el segundo valor",));
				resultado = numero01*numero02;
				alert("El resultado de la multiplicación es:" + resultado);
			} else {
				// Operacion: Division
				if (opcion_num==4) {
					numero01=Number(prompt("Ingresar el primer valor",));
		            numero02=Number(prompt("Ingresar el segundo valor",));
					resultado = numero01/numero02;
					alert("El resultado de la división es:" + resultado);
				}
			}
		}
	}
}


//mes del calendariofunction

function mesCalendario() {
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
		alert("Numero inválido, coloca un número del 1 al 12", '<BR/>');
	}
}


//suma de numero pares e impares

function sumaparesimpares() {
    var i, suma_impar, suma_par;
    i = 0;
    suma_par = 0;
    suma_impar = 0;
    while (i < 101) {
        if (i % 2 == 0) {
            suma_par = suma_par + i;
        } else {
            suma_impar = suma_impar + i;
        }
        i = i + 1;
    }
    alert("La suma de los primeros números PARES entre 0 y 100 es: " + suma_par + "\nLa suma de los primeros números IMPARES entre 0 y 100 es: " + suma_impar);
}

//tabla de multiplicar

function tablaMultiplicar() {
    var contador01, numero01;
    numero01 = Number(prompt("Ingresa un número para generar su tabla de multiplicar"));
    contador01 = 1;
    do {
        alert(numero01 + " x " + contador01 + " = " + (numero01 * contador01) + "\n");
        contador01 = contador01 + 1;
    } while (contador01 != 11);
}

//salario semanal

function salarioSemanal() {
    var horas, salario, salariobase;
    horas = Number(prompt("Calcularemos el salario semanal de un trabajador \n Ingresa el número de horas que trabaja a la semana"));
    salariobase = Number(prompt("Ingresa el salario base por hora"));
    salario = salariobase * horas;
    alert("El salario semanal será de: $" + salario + " Pesos");
}

//jubilación

function jubilacion() {
    var anosaportacion, edad, genero, persona;
    persona = 1;
    do {
        anosaportacion = Number(prompt("Ingresando 3 datos sabremos si tiene derecho a jubilación \n \nDatos de persona " + persona + "\n¿Cuántos años lleva aportando (ingresa un número entero)"));
        edad = Number(prompt("¿Qué edad tiene actualmente (ingresa un número entero)"));
        genero = Number(prompt("¿Género Femenino (presiona 1), género masculino (presiona 2)"));
        switch (genero) {
            case 1:
                if (anosaportacion >= 20 && edad >= 60) {
                    alert("SI tiene derecho a jubilación");
                } else {
                    alert("NO tiene derecho a jubilación");
                }
                break;
            case 2:
                if (anosaportacion >= 20 && edad >= 65) {
                    alert("SI tiene derecho a jubilación");
                } else {
                    alert("NO tiene derecho a jubilación");
                }
                break;
            default:
                alert("No escribiste una letra válida para género, intenta nuevamente");
        }

        alert("Siguiente consulta");
        persona = persona + 1;
    } while (persona !== 11);
    alert("Alcanzó el límete de personas, fin del programa");
}