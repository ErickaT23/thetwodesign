    // ---------------------- MANEJO DEL CARRITO ----------------------
// ---------------- ACTUALIZAR CONTADOR DEL CARRITO ----------------
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = totalItems;
}

// Llamar la función al cargar la página
document.addEventListener("DOMContentLoaded", updateCartCount);
    // ---------------------- ANIMACIONES DE ENTRADA ----------------------
    const products = document.querySelectorAll(".product");
    products.forEach((product, index) => {
        product.style.opacity = "0";
        product.style.transform = "translateY(20px)";
        setTimeout(() => {
            product.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
        }, index * 150);
    });
    //efecto scroll reveal//
AOS.init({
    duration: 1000, // Duración de animaciones
    once: true, // Solo se ejecuta una vez
});
//Menu//
    // ---------------------- MENÚ HAMBURGUESA ----------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.style.width = "100vw"; // Ocupa todo el ancho de la pantalla
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.alignItems = "center";
            menu.style.gap = "10px"; // Espacio entre opciones
            menu.style.padding = "20px 0";
            menu.style.position = "absolute";
            menu.style.top = "100%"; // Justo debajo de la barra de navegación
            menu.style.left = "0";
            menu.style.background = "rgba(72, 70, 70, 0.7)"; // Fondo más claro
            menu.style.borderRadius = "0 0 10px 10px";
            menu.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            menu.style.width = "";
            menu.style.display = "";
            menu.style.flexDirection = "";
            menu.style.alignItems = "";
            menu.style.gap = "";
            menu.style.padding = "";
            menu.style.position = "";
            menu.style.top = "";
            menu.style.left = "";
            menu.style.background = "";
            menu.style.borderRadius = "";
            menu.style.boxShadow = "";
        }
    });

    // Cerrar el menú cuando se hace click fuera de él
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            menu.style.width = "";
            menu.style.display = "";
            menu.style.flexDirection = "";
            menu.style.alignItems = "";
            menu.style.gap = "";
            menu.style.padding = "";
            menu.style.position = "";
            menu.style.top = "";
            menu.style.left = "";
            menu.style.background = "";
            menu.style.borderRadius = "";
            menu.style.boxShadow = "";
        }
    });

    // Ajustar el tamaño del texto de las opciones del menú
    const menuItems = document.querySelectorAll(".navbar ul li a");
    menuItems.forEach(item => {
        item.style.fontSize = "18px"; // Puedes cambiar este valor según lo necesites
        item.style.padding = "10px 15px"; // Agregar más espacio
    });
/* ---------------------- SCRIPT PARA REDIRECCIÓN EN TARJETAS ---------------------- */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", function() {
            const link = this.querySelector(".btn").getAttribute("href");
            if (link) {
                window.location.href = link;
            }
        });
    });
});