function Menu_displace(){
    console.log(document.getElementById("menuaside").classList)


    if(document.getElementById("menuaside").style.opacity == 0){
        console.log("INSISIBLE")
        document.getElementById("menuaside").style.opacity = 1;
        document.getElementById("menuaside").style.visibility = 1;
    }else{
        console.log("VISIBLE")
        document.getElementById("menuaside").style.opacity = 0;
        document.getElementById("menuaside").style.visibility = 0;
    }
}

function Menu_profile(){

}