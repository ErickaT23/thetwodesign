// ---------------------- MANEJO DEL CARRITO ----------------------
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = totalItems;
}

function animateProducts() {
    const products = document.querySelectorAll(".product");
    products.forEach((product, index) => {
        product.style.opacity = "0";
        product.style.transform = "translateY(20px)";
        setTimeout(() => {
            product.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
        }, index * 120);
    });
}

function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");

    if (!menuToggle || !menu) return;

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.style.width = "100vw";
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.alignItems = "center";
            menu.style.gap = "10px";
            menu.style.padding = "20px 0";
            menu.style.position = "absolute";
            menu.style.top = "100%";
            menu.style.left = "0";
            menu.style.background = "rgba(72, 70, 70, 0.7)";
            menu.style.borderRadius = "0 0 10px 10px";
            menu.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            menu.removeAttribute("style");
        }
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            menu.removeAttribute("style");
        }
    });

    const menuItems = document.querySelectorAll(".navbar ul li a");
    menuItems.forEach((item) => {
        item.style.fontSize = "18px";
        item.style.padding = "10px 15px";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    animateProducts();
    initMobileMenu();

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }
});
