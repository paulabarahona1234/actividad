function cambio (){
    document.getElementById("fondo").classList.add("rojo")
}

function textos(){
    document.getElementById("texto1").innerHTML="cambio";
    document.getElementById("texto2").innerHTML="cambio";
    document.getElementById("texto3").innerHTML="cambio";
}


function VerificarN(){
const Numero = document.getElementById("Numero").value;
if(Numero>10){
document.getElementById("resultado").innerHTML= "es mayor";
}else{
    document.getElementById("resultado").innerHTML= "es menor";
}
}

var usuario ={
    nombre: "Daniel",
    edad: 33,
    correo: "daniel@gmail.co"  

}

function miobjeto(){
    
    document.getElementById("datos").innerHTML=`nombre:${usuario.nombre},
    edad:${usuario.edad},correo:${usuario.correo}`
}


function lista(){
    var notas=["migel", "daniel" ,"santi" ,"paula",usuario.nombre];
    for(var i=0; i<notas.length;i++){
        document.getElementById("la-lista").innerHTML +=`<li>${notas[i]}</li>`
    }
}