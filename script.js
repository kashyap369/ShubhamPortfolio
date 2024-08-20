function showMenu(){
    var nav_box = document.querySelector(".nav_link");
    var menubtn = document.querySelector(".menu_btn");
    var nav_c = document.querySelector(".nav");
    if(nav_box.style.left==="-100%"){
        nav_c.style.height ="100vh";
        nav_box.style.left = "0%";
        menubtn.style.display = "none";
        
    }
    else{
        nav_box.style.left = "0%";
    }
    
}
function closeMenu(){
    var nav_box = document.querySelector(".nav_link");
    var nav_c =document.querySelector(".nav");
    var menubtn = document.querySelector(".menu_btn");
    if(nav_box.style.left === "0%"){
        nav_c.style.height ="3rem";
        nav_box.style.left = "-100%";
        menubtn.style.display = "block";
    }
}