document.addEventListener("DOMContentLoaded", function () {
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
    // ---------------------- CARRUSEL ----------------------
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const indicatorsContainer = document.querySelector(".carousel-indicators");
    const carousel = document.querySelector(".carousel");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    // Configurar botones de navegación
    prevButton.classList.add("carousel-prev");
    nextButton.classList.add("carousel-next");
    prevButton.innerHTML = "&#10094;"; // Flecha izquierda
    nextButton.innerHTML = "&#10095;"; // Flecha derecha
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

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
        setInterval(nextSlide, 5000);
    }

    // Event listeners para botones
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

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

    // ---------------------- MANEJO DEL CARRITO ----------------------
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    document.getElementById("cart-count").innerText = cartCount;

    const cartButtons = document.querySelectorAll(".btn");
cartButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        if (this.classList.contains("cart-btn")) {
            // Solo prevenir el default si es para el carrito
            event.preventDefault();
            cartCount++;
            localStorage.setItem("cartCount", cartCount);
            document.getElementById("cart-count").innerText = cartCount;
        }
    });
});
});
//--- TESTIMONIOS ---
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".testimonial-prev");
    const nextButton = document.querySelector(".testimonial-next");
    let currentIndex = 0;
    const totalTestimonials = testimonials.length;
    let interval;

    // Función para actualizar la visibilidad del testimonio
    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove("active");
            if (index === currentIndex) {
                testimonial.classList.add("active");
            }
        });
    }

    // Función para avanzar al siguiente testimonio
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateTestimonials();
    }

    // Función para retroceder al testimonio anterior
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonials();
    }

    // Iniciar el carrusel automático
    function startAutoSlide() {
        interval = setInterval(nextTestimonial, 5000);
    }

    // Detener el carrusel automático cuando el usuario interactúa
    function stopAutoSlide() {
        clearInterval(interval);
        startAutoSlide(); // Reiniciar el intervalo después de una interacción
    }

    // Event Listeners para las flechas
    prevButton.addEventListener("click", function () {
        prevTestimonial();
        stopAutoSlide();
    });

    nextButton.addEventListener("click", function () {
        nextTestimonial();
        stopAutoSlide();
    });

    // Iniciar el carrusel automático
    startAutoSlide();
});
//----FAQ---//
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            // Alternar la clase 'active' en el item actual
            item.classList.toggle("active");

            // Cerrar otros elementos abiertos
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});
//--FORMULARIO DE CONTACTO---//
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
            form.reset();
        } else {
            alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
        }
    }).catch(() => alert("Error de conexión"));
});
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





