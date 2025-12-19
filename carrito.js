var moviles = 0;
var ordenadores = 0;
var portatiles = 0;

var currentid;

//Moviles
function Product_carrito(){
    if(currentid == "movil"){
        moviles += 1;
        console.log("carrito: movil detectado")
    }
    console.log("carrito: sigo adelante")
    console.log(currentid);

    var totalProd = moviles+ordenadores+portatiles;

    console.log(totalProd)
    
    if(document.getElementById("carrito_cantidad").textContent == null){
        document.getElementById("carrito_cantidad").textContent = '0'
    }
    document.getElementById("carrito_cantidad").textContent = '1';

}