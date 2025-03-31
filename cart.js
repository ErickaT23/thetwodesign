document.addEventListener("DOMContentLoaded", () => {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout");
    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Función para actualizar la visualización del carrito
    function updateCartDisplay() {
        cartItemsList.innerHTML = "";
        let total = 0;
        let totalItems = 0;
        let currency = 'Q'; // Definir moneda predeterminada (Quetzales)

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.classList.add("cart-item");

            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-img">
                <div class="cart-info">
                    <p class="cart-name">${item.name}</p> <!-- Aquí mostramos el paquete -->
                    <p class="cart-price">
                    ${item.currency === 'USD' ? '$' : 'Q'}
                    ${item.price ? item.price.toFixed(2) : '0.00'}
                  </p>                  
                </div>
                <div class="cart-quantity">
                    <button class="decrease" data-index="${index}">➖</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-index="${index}">➕</button>
                </div>
                <button class="remove" data-index="${index}">❌</button>
            `;

            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
            totalItems += item.quantity;

            // Verificar si los productos tienen moneda diferente y actualizarla si es necesario
            if (item.currency !== currency) {
                currency = 'USD'; // Si hay productos en USD, asignar USD como la moneda global del carrito
            }
        });

        // Mostrar el total con la moneda adecuada
        totalPriceEl.textContent = `${currency === 'USD' ? '$' : 'Q'}${total.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount(totalItems);
    }

    // Función para actualizar el contador de productos en el carrito
    function updateCartCount(totalItems = null) {
        if (totalItems === null) {
            totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        }
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }

    // Manejar eventos de incremento, decremento y eliminación de productos en el carrito
    cartItemsList.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");

        if (e.target.classList.contains("remove")) {
            cart.splice(index, 1); // Eliminar producto
        } else if (e.target.classList.contains("increase")) {
            cart[index].quantity += 1; // Incrementar cantidad
        } else if (e.target.classList.contains("decrease")) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1; // Decrementar cantidad
            } else {
                cart.splice(index, 1); // Eliminar producto si la cantidad es 1
            }
        }

        updateCartDisplay();
    });

    // Redirigir al checkout
    checkoutBtn.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });

    updateCartDisplay();
    updateCartCount();
});

// Función para agregar productos al carrito desde cualquier página
function addToCart(id, name, price, currency, image, packageType) {
    // Validación de datos esenciales
    if (!id || !name || price === undefined || !currency || !image) {
        console.error("❌ Producto incompleto, no se puede agregar al carrito");
        return;
    }

    // Convertimos el precio a número por seguridad
    price = Number(price);

    // Obtener carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Buscar si ya existe un producto con mismo ID y tipo de paquete
    const existingItem = cart.find(item => item.id === id && item.package === packageType);

    if (existingItem) {
        existingItem.quantity += 1; // Aumentar cantidad si ya existe
    } else {
        // Agregar nuevo producto al carrito
        cart.push({
            id,
            name,
            price,
            currency,
            quantity: 1,
            image,
            package: packageType
        });
    }

    // Guardar el carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar visualmente si las funciones están disponibles
    if (typeof updateCartDisplay === "function") updateCartDisplay();
    if (typeof updateCartCount === "function") updateCartCount();

    // Mensaje de confirmación (opcional)
    console.log(`✅ Producto agregado: ${name} (${packageType})`);
}



//MENU HAMBURGUESA//
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
    //efecto scroll reveal//
AOS.init({
    duration: 1000, // Duración de animaciones
    once: true, // Solo se ejecuta una vez
});

document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count"); // Elemento del contador del carrito
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        let totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }

    updateCartCount();
});


