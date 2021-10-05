window.addEventListener("load",function(){

    var boton = document.getElementById("boton");
    var p = document.getElementById("resultado");

    boton.onclick = function()
    {
        var edad = document.getElementById("edad").value-0;
        if (isNaN(edad))
        {
            p.innerHTML = "Lo introducido no es una edad válida.";
        }
        else
        {
            p.innerHTML = "Tu edad dentro de cuatro años será "+(edad+4);
        }
    }

})