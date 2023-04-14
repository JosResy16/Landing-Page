window.addEventListener("load" , (e)=>{
    const btn_bars = document.getElementById("btn-bars")
    const nav = document.querySelector("header nav");
    const menu_cerrar = document.getElementById("menu-cerrar")
    const menu_abrir = document.getElementById("menu-abrir");
    
    btn_bars.addEventListener("click" ,  (e) => {
        nav.classList.toggle("visible");
        menu_abrir.classList.toggle("salir")
        menu_cerrar.classList.toggle("salir")
    })
})