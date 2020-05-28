var correo;
var expresion;

function valida_envia(){
   	if (document.registro.nombre.value.length<3){
      		var errornombr = document.getElementById("errornombre");
			errornombr.innerHTML = "Tiene que escribir su nombre"
			console.log("Tiene que escribir su nombre")
			return 0;
      		}
	if (document.registro.apellido.value.length<3){
      		var errorapellid = document.getElementById("errorapellido");
			errorapellid.innerHTML = "Tiene que escribir su apellido"
			console.log("Tiene que escribir su apellido")
			return 0;
      		}
	correo=document.getElementById("email").value;
	expresion= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (!expresion.test(email.value)){ 
			document.getElementById("erroremail").innerHTML = "Ingrese un Email valido";
			console.log("Ingrese un Email valido")        
			return false
	}
	  	edad = document.registro.edad.value
   	if (edad==""){
      		var erroreda = document.getElementById("erroredad");
			erroreda.innerHTML = "Tiene que introducir un número mayor que cero."
			console.log("Tiene que introducir un número mayor que cero.")
      		document.registro.edad.focus()
      		return 0;
	}
	if (document.registro.coment.value.length<20){
      		var errorcomentari = document.getElementById("errorcoment");
			errorcomentari.innerHTML = "Tiene que escribir al menos 20 letras"
			console.log("Tiene que escribir al menos 20 letras")
			return 0;
      		}
	console.log(document.registro.nombre.value)
	console.log(document.registro.apellido.value)
	console.log(document.getElementById("email").value)
	console.log(document.registro.edad.value)
	console.log(document.registro.coment.value)
	alert("Muchas gracias por enviar el formulario");

   
}	