document.addEventListener("DOMContentLoaded", () => {
    const orderItems = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
    const payNowButton = document.getElementById("pay-now");
    const cartCount = document.getElementById("cart-count");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function displayOrderSummary() {
      orderItems.innerHTML = "";
      let total = 0;
      let detectedCurrency = null;
  
      cart.forEach(item => {
        const price = Number(item.price ?? item.priceQ ?? item.priceUSD);
        let usedCurrency = item.currency?.toUpperCase();
  
        if (usedCurrency !== "USD") usedCurrency = "Q";
  
        if (!price || isNaN(price)) {
          console.warn("❌ Precio inválido para:", item);
          return;
        }
  
        const subtotal = price * item.quantity;
        total += subtotal;
  
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${item.image ?? ''}" alt="${item.name}" style="width: 260px; height: auto;">
          ${item.name} x${item.quantity} - ${usedCurrency === 'USD' ? '$' : 'Q'}${subtotal.toFixed(2)}
        `;
        orderItems.appendChild(li);
  
        if (!detectedCurrency) {
          detectedCurrency = usedCurrency;
        }
      });
  
      orderTotal.textContent = `${detectedCurrency === "USD" ? "$" : "Q"}${total.toFixed(2)}`;
    }
  
    function getSelectedPaymentMethod() {
      const methods = document.querySelectorAll('input[name="payment-method"]');
      for (const method of methods) {
        if (method.checked) return method.value;
      }
      return null;
    }
  
    function sendOrderToWhatsApp() {
      const name = document.getElementById("name")?.value;
      const phone = document.getElementById("phone")?.value;
      const email = document.getElementById("email")?.value;
      const country = document.getElementById("country")?.value;
      const paymentMethod = getSelectedPaymentMethod();
  
      if (!name || !phone || !email || !country) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
      }
  
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
  
      let currency = "Q";
      let total = 0;
      let orderSummary = "RESUMEN DE PEDIDO:\n";
  
      cart.forEach(item => {
        const price = Number(item.price ?? item.priceQ ?? item.priceUSD);
        const usedCurrency = item.currency === "USD" ? "USD" : "Q";
  
        if (!price || isNaN(price)) return;
  
        const subtotal = price * item.quantity;
        total += subtotal;
        currency = usedCurrency;
  
        orderSummary += `- ${item.name} x${item.quantity} - ${usedCurrency === 'USD' ? '$' : 'Q'}${subtotal.toFixed(2)}\n`;
      });
  
      orderSummary += `\nTOTAL: ${currency === 'USD' ? '$' : 'Q'}${total.toFixed(2)}\n`;
      orderSummary += `\nDATOS DE CONTACTO:\n`;
      orderSummary += `Nombre: ${name}\n`;
      orderSummary += `Teléfono: ${phone}\n`;
      orderSummary += `Email: ${email}\n`;
      orderSummary += `País: ${country}\n`;
      orderSummary += `Método de Pago: ${paymentMethod}`;
  
      const whatsappNumber = "50236011737";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderSummary)}`;
  
      window.open(whatsappUrl, "_blank");
  
      localStorage.removeItem("cart");
  
      setTimeout(() => {
        alert("¡Gracias por tu pedido! Hemos abierto WhatsApp para que completes tu compra.");
        window.location.href = "/index.html";
      }, 500);
    }
  
    payNowButton?.addEventListener("click", sendOrderToWhatsApp);
    displayOrderSummary();
  
    // Cambiar info de método de pago
    document.querySelectorAll('.paymentinfo input[name="payment-method"]').forEach(input => {
      input.addEventListener('change', function () {
        document.querySelectorAll('.paymentinfo label').forEach(label => label.classList.remove('selected'));
        document.querySelectorAll('.paymentinfo .payment-details').forEach(div => div.classList.remove('active'));
  
        const selectedLabel = this.closest('label');
        selectedLabel.classList.add('selected');
  
        const selectedIndex = [...document.querySelectorAll('.paymentinfo input[name="payment-method"]')].indexOf(this);
        document.querySelectorAll('.paymentinfo .payment-details')[selectedIndex].classList.add('active');
      });
    });
  
    document.querySelector('.paymentinfo input[name="payment-method"]:checked')
      ?.dispatchEvent(new Event('change'));
  
    // Contador del carrito
    function updateCartCount() {
      const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
      if (cartCount) cartCount.textContent = totalItems;
    }
    updateCartCount();
  });
  

// AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar ul");

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
menuItems.forEach(item => {
    item.style.fontSize = "18px";
    item.style.padding = "10px 15px";
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

//extra tip 
const uniqueCurrencies = new Set(cart.map(item => item.currency));
if (uniqueCurrencies.size > 1) {
  alert("Hay productos con distinta moneda. Por favor verifica tu carrito.");
}
