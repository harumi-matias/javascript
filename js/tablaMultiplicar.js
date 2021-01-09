// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de ciclos for Para 
// imprimir la tabla de multiplicar de un numero
// ingresado por el usuario
function tablamultiplicar() {
	var contador01, numero01;
	document.write("Ingresar un número para generar su tabla de multiplicar",'<BR/>');
	numero01 = prompt();
	// Con este ciclo se genera la multiplicacion del numero ingresado
	// en cada iteracion por el valor del contador (variable de control)
	// desde 1 hasta llegar a 10 de uno en uno
	for (contador01=1;contador01<=10;contador01++) {
		document.write(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}

