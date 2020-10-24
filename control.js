function validarfor(){

var usuario = document.getElementById("usuario").value; 
var clave = document.getElementById("clave").value;


if ((usuario == "") && (clave == "")) {  
    alert("Ambos campos están incompletos");
    return false;
} else{


if ((usuario == "")){  
    alert("Usted no ha ingresado un usuario.");
    return false;
}
  
if ((clave == "")) {  
    alert("Usted no ha ingresado una clave");
    return false;
}
  
 alert("¡Ingresó correctamente!");  
  
}   
}