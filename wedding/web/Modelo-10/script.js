document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado");

    const cartCount = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const currencyToggle = document.getElementById("currency-toggle");
    const packageDetails = document.getElementById("package-details");
    const priceButton = document.getElementById("price-btn");
    const mainImage = document.getElementById("mainImg");

    // Función para actualizar el carrito
    function updateCartCount() {
        let totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Mostrar detalles del paquete
    function showPackage(type) {
        console.log(`📦 Mostrando paquete: ${type}`);

        let packages = {
            basic: {
                title: "Incluye:",
                details: [
                    "- Detalles del evento: fecha, hora y lugar de la ceremonia y recepción.",
                    "- Mapa con ubicación: Google Maps integrado para una fácil llegada.",
                    "- Confirmación de asistencia (RSVP): Tus invitados pueden confirmar con un clic.",
                    "- Galería de fotos: Comparte imágenes de su historia de amor.",
                    "- Música de fondo: Opción para agregar una canción especial.",
                    "- Cuenta regresiva: Un contador para el gran día.",
                    "- Vestimenta y dress code: Guía de estilo para los invitados.",
                    "- Mesa de regalos: Enlace a lista de regalos o datos bancarios.",
                    "- Frase especial o dedicatoria: Personaliza con un mensaje romántico.",
                    "- Link General: Un único enlace para compartir con todos los invitados."
                ],
                priceQ: 685,
                priceUSD: 87,
                image: "/wedding/web/Modelo-10/media/T2.png"
            },
            premium: {
                title: "Incluye:",
                details: [
                    "- Detalles del evento: fecha, hora y lugar de la ceremonia y recepción.",
                    "- Mapa con ubicación: Google Maps integrado para una fácil llegada.",
                    "- Confirmación de asistencia (RSVP): Tus invitados pueden confirmar con un clic.",
                    "- Galería de fotos: Comparte imágenes de su historia de amor.",
                    "- Música de fondo: Opción para agregar una canción especial.",
                    "- Cuenta regresiva: Un contador para el gran día.",
                    "- Vestimenta y dress code: Guía de estilo para los invitados.",
                    "- Mesa de regalos: Enlace a lista de regalos o datos bancarios.",
                    "- Frase especial o dedicatoria: Personaliza con un mensaje romántico.",
                    "- Link Personalizado: Cada invitado recibe un enlace único con su nombre."
                ],
                priceQ: 789,
                priceUSD: 99,
                image: "/wedding/web/Modelo-10/media/T1.png"
            }
        };

        let packageInfo = packages[type];
        if (!packageInfo) {
            console.error("❌ ERROR: No se encontró el paquete seleccionado.");
            return;
        }

        // Determinar la moneda seleccionada
        let isUSD = currencyToggle.checked;
        let price = isUSD ? packageInfo.priceUSD : packageInfo.priceQ;

        // Mostrar detalles del paquete en el HTML
        packageDetails.innerHTML = `
            <strong>${packageInfo.title}</strong>
            <ul>
                ${packageInfo.details.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;

        // Actualizar el precio en el botón
        priceButton.textContent = `Precio: ${isUSD ? "$" + price : "Q" + price}`;
        priceButton.setAttribute("data-price", price);
        priceButton.setAttribute("data-currency", isUSD ? "USD" : "Q");

        // Cambiar la imagen
        mainImage.src = packageInfo.image;
    }

    // Cambiar moneda (dólares o quetzales)
    function toggleCurrency() {
        console.log("🔄 Cambiando moneda...");
        let selectedPackage = document.querySelector(".btn.active");
        if (selectedPackage) {
            showPackage(selectedPackage.getAttribute("data-package"));
        } else {
            showPackage('basic');
        }
    }

    // Evento para los botones de selección de paquete
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            showPackage(button.getAttribute("data-package"));
        });
    });

    // Evento para cambiar moneda
    currencyToggle.addEventListener("change", toggleCurrency);

    // Agregar al carrito
    document.querySelector(".add-to-cart").addEventListener("click", (event) => {
        const product = event.target.closest(".product-info");
        const id = product.getAttribute("data-id") || "default-id";
        const name = document.querySelector(".product-info h2").textContent;
        const price = parseFloat(document.getElementById("price-btn").getAttribute("data-price"));
        const currency = document.getElementById("price-btn").getAttribute("data-currency");
        const image = document.getElementById("mainImg").src;

        addToCart(id, name, price, currency, image);
    });

    // Función para agregar al carrito
function addToCart(id, name, price, currency, image) {
    const existingItem = cart.find(item => item.id === id && item.image === image);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, currency, quantity: 1, image });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // 🔥 Evento para Google Ads y Analytics (solo si gtag está disponible)
    if (typeof gtag === 'function') {
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
    }

    // 🎉 Mostrar popup
    const popup = document.getElementById("cart-popup");
    if (popup) {
        popup.style.display = "flex";
        setTimeout(() => {
            popup.style.display = "none";
        }, 4000);
    }
}

    // Inicializar el conteo del carrito
    updateCartCount();

    // Mostrar el paquete "premium" por defecto
    showPackage('premium');

    window.showPackage = showPackage;
    window.toggleCurrency = toggleCurrency;

    // Cambiar colores de los botones al hacer clic
    let basicBtn = document.querySelector(".btn-basic");
    let premiumBtn = document.querySelector(".btn-premium");

    if (basicBtn && premiumBtn) {
        premiumBtn.style.background = "var(--mocha-muse)";
        premiumBtn.style.color = "white";
        basicBtn.style.background = "white";
        basicBtn.style.color = "var(--mocha-muse)";

        basicBtn.addEventListener("click", function() {
            basicBtn.style.background = "var(--mocha-muse)";
            basicBtn.style.color = "white";
            premiumBtn.style.background = "white";
            premiumBtn.style.color = "var(--mocha-muse)";
        });

        premiumBtn.addEventListener("click", function() {
            premiumBtn.style.background = "var(--mocha-muse)";
            premiumBtn.style.color = "white";
            basicBtn.style.background = "white";
            basicBtn.style.color = "var(--mocha-muse)";
        });
    }
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
    "/wedding/web/Modelo-10/media/T1.png",
    "/wedding/web/Modelo-10/media/T2.png",
    "/wedding/web/Modelo-10/media/T3.png"
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
        window.open("https://modeloterracota.thetwodesign.com/?id=1", "_blank");
    }
