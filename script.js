let estadomenu;

function Menu_displace(){
    console.log(document.getElementById("menuaside").classList)

    if(estadomenu == null){
        console.log("VISIBLE")
        document.getElementById("menuaside").classList.remove('active');
        estadomenu = true
    }
    else if(estadomenu == true){
        console.log("INSISIBLE")
        document.getElementById("menuaside").classList.add('active');
        estadomenu = false
    }else{
        console.log("VISIBLE")
        document.getElementById("menuaside").classList.remove('active');
        estadomenu = true
    }
}