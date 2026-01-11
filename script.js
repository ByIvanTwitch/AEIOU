    let aside = true;
    let loged = true;

    console.log(aside)
    Menu_displace()
    Menu_profile()

    document.getElementById("menuaside").innerHTML = `            
            <a href="./index.html">Inicio</a>
            <a href="./moviles.html">Moviles</a>
            <a href="./pc-sobremesa.html">Pc Sobremesa</a>
            <a href="./pc-portatil.html">Pc Portatiles</a>
            <a href="./vende tus productos.html">Vende tus productos</a>
            <a href="./sube tus productos.html">Sube tus productos</a>
            <a href="./trabaja con nosotros.html">Trabaja con nosotros</a>
            <a href="./contacto.html">Contacto</a>
            <a href="googleTranslateElementInit()" id="google_translate_element"></a>`

    document.querySelector("footer").innerHTML = `
    TecFresh 2025 - Todos los derechos reservados
        
    <a href="https://www.instagram.com" target="_blank" style="text-decoration: none;">
        <img src="../instagram.png" alt="Instagram" style="width: 30px;">
    </a>
    
    <a href="https://www.tiktok.com" target="_blank" style="text-decoration: none;">
        <img src="../tik-tok.png" alt="tiktok" style="width: 30px;">
    </a>
    
    <a href="https://www.facebook.com" target="_blank" style="text-decoration: none;">
        <img src="../facebook.png" alt="Facebook" style="width: 30px;">
    </a>`

function Menu_displace(){
    console.log(document.getElementById("menuaside").classList)


    if(aside == false){
        console.log("INSISIBLE")
        document.getElementById("menuaside").style.opacity = 1;
        document.getElementById("menuaside").style.visibility = 1;
        document.getElementById("menuaside").style.transform = "translate(0 ,0)";
        aside = true
    }else{
        console.log("VISIBLE")
        document.getElementById("menuaside").style.opacity = 0;
        document.getElementById("menuaside").style.visibility = 0;
        document.getElementById("menuaside").style.transform = "translate(-100vw ,100px)";
        aside = false
    }
}

function Menu_cesta(){
    if(document.getElementById("menuotherside").classList.contains('active')){
        document.getElementById("menuotherside").classList.remove('active');
    }else{
        document.getElementById("menuotherside").classList.add('active');
    }
    
}

function Menu_profile(){

    if(loged == false){
        document.getElementById("loged").style.opacity = 1;
        document.getElementById("loged").style.transform = "translate(-89vw ,-65px);";
        loged = true
    }
    else{
        let posx = document.getElementById("User").getBoundingClientRect().left;
        document.getElementById("loged").style.opacity = 0;
        document.getElementById("loged").style.transform = `translate(${posx}px ,0px)`;
        loged = false
    }
}

function Porduct_Overlay(this_clikado){
    currentid = this_clikado.id
    if(this_clikado.id == "movil"){
        console.log("Movil detectado!")
        document.getElementById("overlayprod").classList.add("active");
        document.getElementById("imagen-producto").src = "./Items/Iphone.png"
        document.getElementById("titulo-producto").innerText = "Xiaomi Redmi Note 14 Pro 5G 8/256GB Negro Medianoche Libre"
    }else if(this_clikado.id == "portatil"){
        document.getElementById("overlayprod").classList.add("active");
        document.getElementById("imagen-producto").src = "./Items/portatil.webp"
        document.getElementById("titulo-producto").innerText = "Portátil Lenovo IdeaPad Slim 3 Gen 8 15IRH8 Intel Core i5-13420H/16GB/1TB SSD/15.6"
    }else if(this_clikado.id == "ordenador"){
        document.getElementById("overlayprod").classList.add("active");
        document.getElementById("imagen-producto").src = "./Items/ordenador.png"
        document.getElementById("titulo-producto").innerText = "Torre PC Tempest Umbra RGB Torre ATX Negra"
    }
}
function Product_Overlay_Close(){
    document.getElementById("overlayprod").classList.remove("active");
}