document.addEventListener("DOMContentLoaded", function () {
    // ---------------------- MENÚ HAMBURGUESA ----------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");

    if (menuToggle && menu) {
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
    }

    // Cerrar el menú cuando se hace click fuera de él
    document.addEventListener("click", (event) => {
        if (menuToggle && menu && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
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
    // ---------------------- CARRUSEL ----------------------
    const heroSlideInterval = 8500;
    const featuredSlideInterval = 9000;
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const carousel = document.querySelector(".carousel");
    let prevButton = null;
    let nextButton = null;

    if (carousel && slides.length > 1) {
        prevButton = document.createElement("button");
        nextButton = document.createElement("button");
        prevButton.classList.add("carousel-prev");
        nextButton.classList.add("carousel-next");
        prevButton.innerHTML = "&#10094;";
        nextButton.innerHTML = "&#10095;";
        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        updateIndicators(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function updateIndicators(index) {
        const dots = document.querySelectorAll(".carousel-indicator");
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    // Crear indicadores de navegación solo si existen slides y el contenedor de indicadores está presente
    if (slides.length > 0 && indicatorsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("carousel-indicator");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
            indicatorsContainer.appendChild(dot);
        });
    }

    // Inicializa el carrusel solo si hay imágenes disponibles
    if (slides.length > 0) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${i * 100}%)`;
        });
        showSlide(currentSlide);
        if (slides.length > 1) {
            setInterval(nextSlide, heroSlideInterval);
        }
    }

    // Event listeners para botones
    if (nextButton && prevButton) {
        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);
    }

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

    const featuredCarousels = document.querySelectorAll("[data-featured-carousel]");

    featuredCarousels.forEach((carousel) => {
        const featuredSlides = carousel.querySelectorAll(".featured-slide");
        const featuredDots = carousel.querySelectorAll(".featured-dot");
        let currentFeaturedSlide = 0;

        function showFeaturedSlide(index) {
            featuredSlides.forEach((slide, slideIndex) => {
                slide.classList.toggle("active", slideIndex === index);
            });

            featuredDots.forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === index);
            });
        }

        function nextFeaturedSlide() {
            currentFeaturedSlide = (currentFeaturedSlide + 1) % featuredSlides.length;
            showFeaturedSlide(currentFeaturedSlide);
        }

        if (featuredSlides.length > 0 && featuredDots.length > 0) {
            featuredDots.forEach((dot, index) => {
                dot.addEventListener("click", () => {
                    currentFeaturedSlide = index;
                    showFeaturedSlide(currentFeaturedSlide);
                });
            });

            showFeaturedSlide(currentFeaturedSlide);
            setInterval(nextFeaturedSlide, featuredSlideInterval);
        }
    });

    const promoPopup = document.getElementById("promo-popup");
    const promoPopupClose = document.getElementById("promo-popup-close");

    if (promoPopup) {
        window.setTimeout(() => {
            promoPopup.classList.add("active");
            promoPopup.setAttribute("aria-hidden", "false");
        }, 700);

        if (promoPopupClose) {
            promoPopupClose.addEventListener("click", () => {
                promoPopup.classList.remove("active");
                promoPopup.setAttribute("aria-hidden", "true");
            });
        }

        promoPopup.addEventListener("click", (event) => {
            if (event.target === promoPopup) {
                promoPopup.classList.remove("active");
                promoPopup.setAttribute("aria-hidden", "true");
            }
        });
    }

    // ---------------------- MANEJO DEL CARRITO ----------------------
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    const cartBadge = document.getElementById("cart-count");
    if (cartBadge) cartBadge.innerText = cartCount;

    const cartButtons = document.querySelectorAll(".btn");
cartButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        if (this.classList.contains("cart-btn")) {
            // Solo prevenir el default si es para el carrito
            event.preventDefault();
            cartCount++;
            localStorage.setItem("cartCount", cartCount);
            if (cartBadge) cartBadge.innerText = cartCount;
        }
    });
});
});
//----FAQ---//
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.setAttribute("aria-expanded", "false");

        question.addEventListener("click", function () {
            const isActive = item.classList.toggle("active");
            question.setAttribute("aria-expanded", String(isActive));

            // Cerrar otros elementos abiertos
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
                }
            });
        });
    });
});
//--FORMULARIO DE CONTACTO---//
const contactForm = document.getElementById("contact-whatsapp-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const whatsappNumber = "50236011737";
        const formData = new FormData(contactForm);
        const name = (formData.get("name") || "").toString().trim();
        const phone = (formData.get("phone") || "").toString().trim();
        const event = (formData.get("event") || "").toString().trim();
        const message = (formData.get("message") || "").toString().trim();

        const whatsappMessage = [
            "Hola Two Design, quiero más información.",
            "",
            `Nombre: ${name}`,
            `Teléfono: ${phone}`,
            `Evento: ${event}`,
            `Mensaje: ${message}`
        ].join("\n");

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        contactForm.reset();
    });
}
//efecto scroll reveal//
AOS.init({
    duration: 1000, // Duración de animaciones
    once: true, // Solo se ejecuta una vez
});
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
