var moviles = 0;
var ordenadores = 0;
var portatiles = 0;

var currentid = "";

//Moviles
function Product_carrito(){
    if(currentid == "movil"){
        moviles += 1;
        console.log("carrito: movil detectado")
    }
    if(currentid == "portatil"){
        portatiles += 1;
        console.log("carrito: portatil detectado")
    }
    if(currentid == "ordenador"){
        ordenadores += 1;
        console.log("carrito: ordenador detectado")
    }
    console.log("carrito: sigo adelante")
    console.log(currentid);

    var totalProd = moviles+ordenadores+portatiles;

    console.log(totalProd)
    
    document.getElementById("carrito_cantidad").textContent = totalProd;

}