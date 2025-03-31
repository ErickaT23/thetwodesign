document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado - versión paquete único");

    const cartCount = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const currencyToggle = document.getElementById("currency-toggle");
    const packageDetails = document.getElementById("package-details");
    const priceButton = document.getElementById("price-btn");
    const mainImage = document.getElementById("mainImg");

    // Datos del único paquete
    const singlePackage = {
        details: [
            "Incluye:",
            "- Detalles del evento: fecha, hora y lugar de la ceremonia y recepción.",
            "- Mapa con ubicación: Google Maps integrado para una fácil llegada.",
            "- Confirmación de asistencia (RSVP): Tus invitados pueden confirmar con un clic.",
            "- Vestimenta y dress code: Guía de estilo para los invitados.",
            "- Mesa de regalos: Enlace a lista de regalos o datos bancarios.",
            "- Frase especial o dedicatoria: Personaliza con un mensaje romántico.",
            "- Tienes hasta tres versiones de pdf, indicando la cantidad de pases para que puedas enviar a tus invitados.",
        ],
        priceQ: 369,
        priceUSD: 47,
        image: "/wedding/pdf/images/Modelo-1/media/0.png"
    };

    // Actualiza el contador del carrito
    function updateCartCount() {
        let totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Muestra el paquete único
    function showPackage() {
        console.log("📦 Mostrando paquete único");

        let isUSD = currencyToggle.checked;
        let price = isUSD ? singlePackage.priceUSD : singlePackage.priceQ;

        // Mostrar detalles (sin título si no se desea)
        packageDetails.innerHTML = `
            <ul>
                ${singlePackage.details.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;

        // Actualizar precio y moneda
        priceButton.textContent = `Precio: ${isUSD ? "$" + price : "Q" + price}`;
        priceButton.setAttribute("data-price", price);
        priceButton.setAttribute("data-currency", isUSD ? "USD" : "Q");

        // Cambiar imagen
        mainImage.src = singlePackage.image;
    }

    // Evento para cambiar moneda
    currencyToggle.addEventListener("change", showPackage);

    // Agregar al carrito
    const addToCartBtn = document.querySelector(".add-to-cart");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", (event) => {
        const product = event.target.closest(".product-info");
        const id = product.getAttribute("data-id") || "default-id";
        const name = document.querySelector(".product-info h2").textContent;
        const price = parseFloat(document.getElementById("price-btn").getAttribute("data-price"));
        const currency = document.getElementById("price-btn").getAttribute("data-currency");
        const image = document.getElementById("mainImg").src;
    
        addToCart(id, name, price, currency, image);
      });
    } else {
      console.warn("⚠️ Botón 'Agregar al carrito' no encontrado");
    }
    

    // Función para agregar producto al carrito
    function addToCart(id, name, price, currency, image) {
        if (!id || !name || price === undefined || !currency || !image) {
            console.error("❌ Producto incompleto, no se puede agregar al carrito");
            return;
        }

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price: Number(price), currency, quantity: 1, image });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

             // 🔥 Evento para Google Ads y Analytics
             gtag('event', 'add_to_cart', {   
                currency: currency,
                value: Number(price),
                 items: [{
                item_id: id,
                item_name: name,
                price: Number(price),
                quantity: 1
                 }]
             });

         // Mostrar popup SOLO cuando se agrega producto
         const popup = document.getElementById("cart-popup");
         popup.style.display = "flex";
     
         setTimeout(() => {
             popup.style.display = "none";
         }, 4000);
    }

    // Inicializa
    updateCartCount();
    showPackage(); // Mostrar el paquete al cargar

    // Limpieza: eliminar botones de selección de paquete si existen
    document.querySelectorAll(".btn-basic, .btn-premium").forEach(btn => btn.remove());
});

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
/*---------------------- ANIMACIONES DE SCROLL ----------------------*/
AOS.init({
    duration: 1000, // Duración de animaciones
    once: true, // Solo se ejecuta una vez
});
/*--MINIATURAS--*/
function changeImage(img) {
    document.getElementById("mainImg").src = img.src;
}

function expandImage() {
    let imgSrc = document.getElementById("mainImg").src;
    let overlay = document.createElement("div");
    overlay.className = "expanded";
    overlay.innerHTML = `<button class="close-btn" onclick="this.parentElement.remove()">&times;</button><img src="${imgSrc}" style="width: 100%; border-radius: 10px;">`;
    document.body.appendChild(overlay);
}
// ---------------------- IMÁGENES EN ESCRITORIO ----------------------
function changeImage(img) {
    document.getElementById("mainImg").src = img.src;
}
// ---------------------- IMÁGENES EN RESPONSIVE (SLIDER) ----------------------
const images = [
    "/wedding/pdf/images/Modelo-1/media/0.png",
    "/wedding/pdf/images/Modelo-1/media/1.png",
    "/wedding/pdf/images/Modelo-1/media/2.png",
    "/wedding/pdf/images/Modelo-1/media/3.png",
    "/wedding/pdf/images/Modelo-1/media/4.png",
];

let currentIndex = 0;
const sliderImg = document.getElementById("sliderImg");
const imageCounter = document.getElementById("image-counter");

// Función para cambiar de imagen en el slider
function changeSlide(direction) {
    currentIndex += direction;

    // Evitar desbordamientos
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Actualizar la imagen y el contador
    sliderImg.src = images[currentIndex];
    imageCounter.innerText = `${currentIndex + 1}/${images.length}`;
}
//abrir invitacion
    function openInvitation() {
        window.open("/wedding/pdf/images/Modelo-1/modelo-azulreal.pdf", "_blank");
    }
