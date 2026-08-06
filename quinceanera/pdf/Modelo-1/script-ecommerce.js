const singlePackage = {
    details: [
        "Incluye:",
        "- Detalles del evento: fecha, hora y lugar de la ceremonia y recepción.",
        "- Mapa con ubicación: Google Maps integrado para una fácil llegada.",
        "- Confirmación de asistencia (RSVP): Tus invitados pueden confirmar con un clic.",
        "- Vestimenta y dress code: Guía de estilo para los invitados.",
        "- Mesa de regalos: Enlace a lista de regalos o datos bancarios.",
        "- Frase especial o dedicatoria: Personaliza con un mensaje romántico.",
        "- Hasta tres versiones del PDF para distintos pases."
    ],
    priceQ: 369,
    priceUSD: 47,
    image: "/quinceanera/pdf/Modelo-1/media/0.png"
};

const galleryImages = [
    "/quinceanera/pdf/Modelo-1/media/0.png",
    "/quinceanera/pdf/Modelo-1/media/1.png",
    "/quinceanera/pdf/Modelo-1/media/2.png",
    "/quinceanera/pdf/Modelo-1/media/3.png",
    "/quinceanera/pdf/Modelo-1/media/4.png"
];

let currentGalleryIndex = 0;

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.textContent = totalItems;
}

function showPackage() {
    const currencyToggle = document.getElementById("currency-toggle");
    const packageDetails = document.getElementById("package-details");
    const priceButton = document.getElementById("price-btn");
    const mainImage = document.getElementById("mainImg");
    const isUSD = Boolean(currencyToggle && currencyToggle.checked);
    const price = isUSD ? singlePackage.priceUSD : singlePackage.priceQ;

    if (packageDetails) {
        packageDetails.innerHTML = `
            <ul>
                ${singlePackage.details.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        `;
    }

    if (priceButton) {
        priceButton.textContent = `Precio: ${isUSD ? "$" + price : "Q" + price}`;
        priceButton.setAttribute("data-price", String(price));
        priceButton.setAttribute("data-currency", isUSD ? "USD" : "Q");
    }

    if (mainImage) {
        mainImage.src = singlePackage.image;
    }
}

function addToCart(id, name, price, currency, image) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === id && item.image === image);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, currency, quantity: 1, image });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    if (typeof gtag === "function") {
        gtag("event", "add_to_cart", {
            currency,
            value: Number(price),
            items: [{
                item_id: id,
                item_name: name,
                price: Number(price),
                quantity: 1
            }]
        });
    }

    const popup = document.getElementById("cart-popup");
    if (popup) {
        popup.style.display = "flex";
        setTimeout(() => {
            popup.style.display = "none";
        }, 4000);
    }
}

function syncGalleryCounter() {
    const sliderImg = document.getElementById("sliderImg");
    const imageCounter = document.getElementById("image-counter");

    if (sliderImg) {
        sliderImg.src = galleryImages[currentGalleryIndex];
    }
    if (imageCounter) {
        imageCounter.innerText = `${currentGalleryIndex + 1}/${galleryImages.length}`;
    }
}

window.changeImage = function changeImage(img) {
    const mainImage = document.getElementById("mainImg");
    if (!img || !mainImage) return;

    const normalizedSrc = img.src.replace(window.location.origin, "");
    const newIndex = galleryImages.indexOf(normalizedSrc);
    if (newIndex >= 0) {
        currentGalleryIndex = newIndex;
    }

    mainImage.src = img.src;
    syncGalleryCounter();
};

window.expandImage = function expandImage() {
    const mainImage = document.getElementById("mainImg");
    if (!mainImage) return;

    const overlay = document.createElement("div");
    overlay.className = "expanded";
    overlay.innerHTML = `<button class="close-btn" onclick="this.parentElement.remove()">&times;</button><img src="${mainImage.src}" style="width: 100%; border-radius: 10px;">`;
    document.body.appendChild(overlay);
};

window.changeSlide = function changeSlide(direction) {
    currentGalleryIndex += direction;

    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    } else if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    }

    const mainImage = document.getElementById("mainImg");
    if (mainImage) {
        mainImage.src = galleryImages[currentGalleryIndex];
    }
    syncGalleryCounter();
};

window.openInvitation = function openInvitation() {
    window.open("/quinceanera/pdf/Modelo-1/modelo-olivo.pdf", "_blank", "noopener");
};

window.showPackage = showPackage;
window.toggleCurrency = showPackage;

document.addEventListener("DOMContentLoaded", () => {
    const currencyToggle = document.getElementById("currency-toggle");
    const addToCartBtn = document.querySelector(".add-to-cart");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar ul");

    updateCartCount();
    showPackage();
    syncGalleryCounter();

    if (currencyToggle) {
        currencyToggle.addEventListener("change", showPackage);
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", (event) => {
            const product = event.target.closest(".product-info");
            const title = document.querySelector(".product-info h2");
            const priceButton = document.getElementById("price-btn");
            const mainImage = document.getElementById("mainImg");
            if (!product || !title || !priceButton || !mainImage) return;

            const id = product.getAttribute("data-id") || "default-id";
            const name = title.textContent;
            const price = parseFloat(priceButton.getAttribute("data-price") || "0");
            const currency = priceButton.getAttribute("data-currency") || "Q";
            addToCart(id, name, price, currency, mainImage.src);
        });
    }

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
                menu.removeAttribute("style");
            }
        });

        document.addEventListener("click", (event) => {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove("active");
                menu.removeAttribute("style");
            }
        });

        document.querySelectorAll(".navbar ul li a").forEach((item) => {
            item.style.fontSize = "18px";
            item.style.padding = "10px 15px";
        });
    }

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }
});
