// Products data
const products = [
    {
        id: 1,
        name: "Bamboo Toothbrush Set",
        price: "₦12.99",
        description: "Eco-friendly bamboo toothbrushes with biodegradable bristles.",
        image: "images/product-1.jpg"
    },
    {
        id: 2,
        name: "Reusable Coffee Cup",
        price: "₦18.99",
        description: "Insulated stainless steel cup that keeps your drinks hot for hours.",
        image: "images/product-2.jpg"
    },
    {
        id: 3,
        name: "Organic Cotton Tote",
        price: "₦15.99",
        description: "Durable and stylish reusable shopping bag made from organic cotton.",
        image: "images/product-3.jpg"
    },
    {
        id: 4,
        name: "Solid Shampoo Bar",
        price: "₦9.99",
        description: "Plastic-free shampoo that lasts 2-3 times longer than liquid shampoo.",
        image: "images/product-1.jpg"
    },
    {
        id: 5,
        name: "Beeswax Food Wraps",
        price: "₦14.99",
        description: "Natural alternative to plastic wrap for food storage.",
        image: "images/product-3.jpg"
    },
    {
        id: 6,
        name: "Compost Bin",
        price: "₦24.99",
        description: "Compact indoor compost bin for kitchen waste.",
        image: "images/hero-bg.jpg"
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

function loadProducts() {
  const productsGrid = document.getElementById("products-grid");

  if (!productsGrid) return;

  productsGrid.innerHTML = products
    .map(
      (product) => `
    <div class="product__card scroll-animate">
        <div class="product__image">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="product__content">
            <h3 class="product__title">${product.name}</h3>
            <p class="product__description">${product.description}</p>
            <div class="product__price">${product.price}</div>
            <button class="btn btn--primary add-to-cart" data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    </div>
`
    )
    .join("");

  // Initialize scroll animations
  initScrollAnimations();

  // Add cart functionality
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        // Show added to cart message
        const button = document.querySelector(`[data-id="${productId}"]`);
        const originalText = button.textContent;
        button.textContent = 'Added to Cart!';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
        
        // Here you would typically add to a cart array or send to backend
        console.log(`Added to cart: ${product.name}`);
    }
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}