// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de la sentencia repetir para determinar
// de un conjunto de 10 personas si tienen derecho a jubilarse,
// considerando su genero, edad y añps de aportacion al seguro social.
// Restricciones:
// I. Las mujeres deben tener mas de 60 años
// II. Los hombres deben tener mas de 65 años
// III. Para todos, los años de aportación deben ser de mayores de 20
function jubilacion() {
	var aportacion, edad, genero, persona;
	persona = 1;
	do {
		document.write("Datos de la persona...",persona,'<BR/>');
		// Se desplegara en pantalla un mensaje al usuario solicitando los datos de la persona
		document.write("¿Cuántos años lleva aportando (número entero)?",'<BR/>');
		aportacion = prompt();
		document.write("Qué edad tiene actualmente (numero entero)?",'<BR/>');
		edad = prompt();
		document.write("Es mujer u hombre (M=Mujer, H=Hombre)?",'<BR/>');
		genero = prompt();
		if (aportacion>20) {
			// Si se cumple con mas de 20 años de aportación se verifica si es mujer 
			// u hombre para validar su edad y determinar si le corresponde jubilación
			if (genero=="M" || genero=="m") {
				if (edad>60) {
					document.write("SI tiene derecho a la jubilación",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilación",'<BR/>');
				}
			} else {
				if (edad>65) {
					document.write("SI tiene derecho a la jubilación",'<BR/>');
				} else {
					document.write("NO tiene derecho a la jubilación",'<BR/>');
				}
			}
		} else {
			document.write("NO tiene derecho a la jubilación",'<BR/>');
		}
		document.write("Siguiente consulta...",'<BR/>');
		// Aumentar en uno el contador principal 
		persona = persona+1;
	} while (persona!==11);
}

