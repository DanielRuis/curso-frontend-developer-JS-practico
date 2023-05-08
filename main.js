const menu_email = document.querySelector(".navbar-email");
const menu_info = document.querySelector(".desktop-menu");
const movil_menu = document.querySelector(".mobile-menu");
const menumovil_boton = document.querySelector(".menu");
const carrito_menu=document.querySelector(".bcarrito")
const detalle_menu = document.querySelector(".product-detail")
carrito_menu.addEventListener("click",toggleCarrito);
menu_email.addEventListener("click", toggleMenu_info);
menumovil_boton.addEventListener("click",toggleMenuMovil_info);
//?Menu que se muestra a la hora de dar click en el correo
function toggleMenu_info(){
    if (detalle_menu.classList.contains("inactive")){
        menu_info.classList.toggle("inactive");
    }else{
        detalle_menu.classList.toggle("inactive");
        menu_info.classList.toggle("inactive"); 
    }
}
//?Menu en estado movil
function toggleMenuMovil_info(){
    if (detalle_menu.classList.contains("inactive")){
        movil_menu.classList.toggle("inactive");
    }else{
        detalle_menu.classList.toggle("inactive");
        movil_menu.classList.toggle("inactive"); 
    }
}
//?Muestra lo que hay en el carrito del cliente
function toggleCarrito(){
    //*para que no colapsen el menu en vista movil con el aside
    if (movil_menu.classList.contains("inactive")&&menu_info.classList.contains("inactive")){
        detalle_menu.classList.toggle("inactive");
    }else if(!movil_menu.classList.contains("inactive")){
        movil_menu.classList.toggle("inactive");
        detalle_menu.classList.toggle("inactive");
    }else if(!menu_info.classList.contains("inactive")){
        menu_info.classList.toggle("inactive");
        detalle_menu.classList.toggle("inactive");
    }

}
