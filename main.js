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

//*Seccion donde se trabaja con las tajetas
const contenedor=document.querySelector(".cards-container")
const productList= [];
productList.push(
    {
        name: 'Bike',
        price: 500,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
productList.push(
    {
        name: 'iPhone',
        price: 600,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
productList.push(
    {
        name: 'Xbox',
        price: 900,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
);
for (product of productList){

    //?Se crea el primer div
    const productCard=document.createElement("div");
    productCard.classList.add('product-card');
    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    


    //?Se crea el segundo div
    const productInfo=document.createElement("div");
    productInfo.classList.add('product-info');

    


    //?Se crea el tercer div-
    const productInfo2=document.createElement("div");
    //En esta parte ya empezamos a mostrar los datos
    const productPrice=document.createElement('p');
    productPrice.innerText='$'+product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;

    productInfo2.append(productPrice,productName);


    //?Creamos el div del figure-
    const productInfoFigure=document.createElement('figure');
    const productImgCar=document.createElement('img');
    productImgCar.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCar);//*Aqui añadimos pIC dentro de pIF
    productInfo.append(productInfo2,productInfoFigure);
    productCard.append(img,productInfo);
    contenedor.appendChild(productCard);
}