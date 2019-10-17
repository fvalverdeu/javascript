function validarForm(){
    var verificar = true;
    
    alert("Validando");
    document.contacto-frm.submit();
}

function limpiarForm(){
    alert("Limpiando");
    document.getElementById("contacto-frm").reset();
}

window.onload = function(){
    var botonEnviar, botonLimpiar;
    botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarForm;

    botonEnviar = document.contacto-frm.enviar_btn;
    botonEnviar.onclick = validarForm;
}


