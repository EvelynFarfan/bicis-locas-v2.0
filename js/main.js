function validateForm(){
	/* Escribe tú código aquí */
	var nom = document.getElementById("name").value;
	var contr = document.getElementById("input-password").value;
	var apellido = document.getElementById("lastname").value;
	var cor = document.getElementById("input-email").value;
	var opcion = document.querySelector("select").value;

	if (nom.length == 0 && apellido == 0 && cor == 0 && contr == 0){
		alert ("Complete los campos");
	} else {
		if( nom == null || nom.length == 0 || nom == ""){
			var error = document.createElement("span"); 
			var errorTexto = document.createTextNode("Escriba un nombre");            
			error.appendChild(errorTexto);                             
			var anclaExistente= document.getElementById("name");
			var padre = anclaExistente.parentNode;
			var nuevoHijo = padre.insertBefore(error, anclaExistente); 
		}else if ( /[0-9]/.test(nom)){
			var error = document.createElement("span"); 
			var errorTexto = document.createTextNode("No ingrese números");            
			error.appendChild(errorTexto);                             
			var anclaExistente= document.getElementById("name");
			var padre = anclaExistente.parentNode;
			var nuevoHijo = padre.insertBefore(error, anclaExistente);
		}else if ( /^[a-z]/.test(nom.charAt(0))){
			var error = document.createElement("span"); 
			var errorTexto = document.createTextNode("Escriba el primer cáracter de su nombre en mayúscula.");            
			error.appendChild(errorTexto);                             
			var anclaExistente= document.getElementById("name");
			var padre = anclaExistente.parentNode;
			var nuevoHijo = padre.insertBefore(error, anclaExistente);
		}
		if( apellido == null || apellido.length == 0 || apellido == ""){
			var error = document.createElement("span"); 
			var errorTexto = document.createTextNode("Ingrese su apellido");            
			error.appendChild(errorTexto);                             
			var anclaExistente= document.getElementById("lastname");
			var padre = anclaExistente.parentNode;
			var nuevoHijo = padre.insertBefore(error, anclaExistente);
		}else if ( /[0-9]/.test(apellido)){
			var error = document.createElement("span"); 
			var errorTexto = document.createTextNode("No ingrese números");            
			error.appendChild(errorTexto);                             
			var anclaExistente= document.getElementById("lastname");
			var padre = anclaExistente.parentNode;
			var nuevoHijo = padre.insertBefore(error, anclaExistente);
		}else if ( /^[a-z]/.test(apellido.charAt(0))){
			var error = document.createElement("span"); 
			var errorTexto = document.createTextNode("Escriba el primer caracter de su apellido en mayúscula.");            
			error.appendChild(errorTexto);                             
			var anclaExistente= document.getElementById("lastname");
			var padre = anclaExistente.parentNode;
			var nuevoHijo = padre.insertBefore(error, anclaExistente);
		}
		var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			if(!emailRegex.test(cor)){
				var error = document.createElement("span"); 
				var errorTexto = document.createTextNode("Ingrese un correo válido.");            
				error.appendChild(errorTexto);                             
				var anclaExistente= document.getElementById("input-email");
				var padre = anclaExistente.parentNode;
				var nuevoHijo = padre.insertBefore(error, anclaExistente);
	    };
	    if(contr == null || contr.length == 0){
	    	var error = document.createElement("span"); 
				var errorTexto = document.createTextNode("Ingresa tu contraseña");            
				error.appendChild(errorTexto);                             
				var anclaExistente= document.getElementById("input-password");
				var padre = anclaExistente.parentNode;
				var nuevoHijo = padre.insertBefore(error, anclaExistente);
	    }else if ( contr.length < 6 ){
	    	var error = document.createElement("span"); 
				var errorTexto = document.createTextNode("Contraseña no válida, debe contener al menos 6 carácteres.");            
				error.appendChild(errorTexto);                             
				var anclaExistente= document.getElementById("input-password");
				var padre = anclaExistente.parentNode;
				var nuevoHijo = padre.insertBefore(error, anclaExistente);
	    }
	    if (contr == "123456" || contr == "098765" || contr == "password"){
	    	var error = document.createElement("span"); 
				var errorTexto = document.createTextNode("Contraseña no válida");            
				error.appendChild(errorTexto);                             
				var anclaExistente= document.getElementById("input-password");
				var padre = anclaExistente.parentNode;
				var nuevoHijo = padre.insertBefore(error, anclaExistente);
	    }
	    if(opcion == 0) {
	    	var error = document.createElement("span"); 
				var errorTexto = document.createTextNode("Seleccione una opción");            
				error.appendChild(errorTexto);                             
				var anclaExistente= document.querySelector("select");
				var padre = anclaExistente.parentNode;
				var nuevoHijo = padre.insertBefore(error, anclaExistente);
	    	// alert("Elige una opción.");
	    }    
		};
}