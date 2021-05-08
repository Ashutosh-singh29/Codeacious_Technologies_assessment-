const menu = document.getElementById("bar");
const vertical_nav = document.getElementById("ashu")
menu.addEventListener("click",function(e){
    if(vertical_nav.style.display==="none"){
    vertical_nav.style.display="block";
    }else{
        vertical_nav.style.display="none";
    }
})