    let aside = true;
    let loged = true;

    console.log(aside)
    Menu_displace()
    Menu_profile()

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

function Menu_profile(){
    if(loged == false){
        document.getElementById("loged").style.opacity = 1;
        document.getElementById("loged").style.transform = "translate(-89vw ,-65px);";
        loged = true
    }
    else{
        document.getElementById("loged").style.opacity = 0;
        document.getElementById("loged").style.transform = "translate(89vw ,65px)";
        loged = false
    }
}