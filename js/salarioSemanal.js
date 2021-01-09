// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo para calcular el salario semanal de un trabajador
function salariosemanal() {
	var base, horas, salario;
	// Se desplegara en pantalla un mensaje al usuario solicitado
	// ingresar por teclado el n�mero de horas trabajadas por semana
	// e ingresar por teclado el salario base por hora
	document.write("Ingresar el n�mero de horas trabajadas en la semana ...",'<BR/>');
	horas = Number(prompt());
	document.write("Ingresar el salario base por hora...",'<BR/>');
	base = Number(prompt());
	// Calcular el salario con los datos ingresados
	salario = horas*base;
	// Desplegar el salario semanal
	document.write("El salario semanal ser� de: ",salario,"pesos",'<BR/>');
	horas = Number(prompt());
}

