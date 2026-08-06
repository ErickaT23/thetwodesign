function renderModelCards() {
    const container = document.querySelector(".product-container[data-model-group]");
    if (!container || !window.MODEL_CATALOG) return;

    const groupKey = container.getAttribute("data-model-group");
    const cardMode = container.getAttribute("data-card-mode");
    const items = window.MODEL_CATALOG[groupKey] || [];

    if (!items.length) {
        container.innerHTML = "<p class='empty-models'>Pronto agregaremos modelos en esta categoria.</p>";
        return;
    }

    container.innerHTML = items
        .map((item) => {
            if (cardMode === "slider-buy") {
                const gallery = Array.isArray(item.gallery) && item.gallery.length
                    ? item.gallery
                    : [item.image].filter(Boolean);
                const slides = gallery
                    .map((image, index) => `<img src="${image}" alt="${item.name}" loading="lazy" class="card-slide${index === 0 ? " active" : ""}">`)
                    .join("");
                const dots = gallery
                    .map((_, index) => `<button type="button" class="card-dot${index === 0 ? " active" : ""}" aria-label="Ver imagen ${index + 1}"></button>`)
                    .join("");

                return `
                <div class="product product-slider-card" data-price="${item.price || 0}" data-name="${item.name}" data-image="${item.image || ""}" data-buy-url="${item.buy || "#"}">
                    <div class="card-slider" data-autoplay="true">
                        <div class="card-slider-track">
                            ${slides}
                        </div>
                        <div class="card-slider-dots">${dots}</div>
                    </div>
                    <p>${item.name}</p>
                    <div class="product-actions product-actions-compact">
                        <a href="${item.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-demo">Demo</a>
                        <button type="button" class="btn btn-buy js-card-buy">Comprar</button>
                    </div>
                </div>`;
            }

            const hasDemo = item.demo && item.demo !== "#";
            const hasImage = item.image && item.image !== "#";
            const theme = item.theme || "classic";
            const demoAttrs = hasDemo
                ? `href="${item.demo}" target="_blank" rel="noopener noreferrer"`
                : "href=\"#\" aria-disabled=\"true\"";
            const demoClass = hasDemo ? "btn btn-demo" : "btn btn-demo btn-disabled";
            const visual = hasImage
                ? `<img src="${item.image}" alt="${item.name}" loading="lazy">`
                : `<div class="model-visual theme-${theme}"><span>${item.name}</span></div>`;

            return `
            <div class="product">
                ${visual}
                <p>${item.name}</p>
                <div class="product-actions">
                    <a ${demoAttrs} class="${demoClass}">Demo</a>
                    <small class="demo-note">Abre vista previa</small>
                    <a href="${item.buy}" class="btn btn-buy">Comprar este modelo</a>
                </div>
            </div>`;
        })
        .join("");

    if (cardMode === "slider-buy") {
        initCardSliders(container);
        initCardBuyButtons(container);
    }
}

function initCardSliders(container) {
    const sliderCards = container.querySelectorAll(".card-slider");

    sliderCards.forEach((slider) => {
        const slides = slider.querySelectorAll(".card-slide");
        const dots = slider.querySelectorAll(".card-dot");
        if (!slides.length || !dots.length) return;

        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle("active", slideIndex === index);
            });
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === index);
            });
            currentIndex = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                showSlide(index);
            });
        });

        showSlide(0);

    });
}

function initCardBuyButtons(container) {
    const buyButtons = container.querySelectorAll(".js-card-buy");

    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".product-slider-card");
            if (!card) return;

            const name = card.getAttribute("data-name") || "Modelo";
            const price = Number(card.getAttribute("data-price") || 0);
            const image = card.getAttribute("data-image") || "";
            const buyUrl = card.getAttribute("data-buy-url") || "/cart.html";
            const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItem = cart.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    currency: "Q",
                    quantity: 1,
                    image,
                    package: "Web"
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.href = "/cart.html";
        });
    });
}

document.addEventListener("DOMContentLoaded", renderModelCards);
