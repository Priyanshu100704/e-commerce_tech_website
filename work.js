
const products = [
  {
    title: "Laptop",
    description: "Powerful laptop with a 15.6-inch display and fast processor.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbAfP_1rsNH47RJR7v-UDHGo-RP6TSa_DzXAPjKUVo89cJSdGbNlo5t0BNZ3Smar7tHQh0I-6VPGfrf895IMQuMUXpEbpJohEIldnAt0pO",
    price: 70999.99,
    oldPrice: 89999.99,
    stock: 50,
    category: "Computer"
  },
  {
    title: "Smartphone",
    description: "Feature-rich smartphone with a 6.5-inch screen.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDzRGER1JFEebyvQ4axcFipllrTCIh39UW2tVA5IEAjd0XwQ-78ukqb1aRm29dS3wYlA3Z8UM_mfCCiOFY5GvgHg4diMLrRI0331zWO1I_hYKeZjWJBatJAw",
    price: 49999.99,
    oldPrice: 69999.99,
    stock: 100,
    category: "Mobile"
  },
  {
    title: "Wireless Headphones",
    description: "Over-ear headphones with 20-hour battery life.",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScvyrO1Oijvcjl6NL3FQHaeDGoEq6iDqOeo5jRsZKKeTnJDQ3-598zaoHfLfZdGC7b3BTZtxMyb39JnyfAK671llza8tmWIYWpr2HY9FDgiHlbAe9DxjIP",
    price: 1499.99,
    oldPrice: 2999.99,
    stock: 30,
    category: "Audio"
  },
  {
    title: "Wireless Mouse",
    description: "Ergonomic mouse with adjustable DPI and silent clicks.",
    image: "https://rukminim2.flixcart.com/image/1200/1200/xif0q/mouse/i/6/y/zeb-haze-2-4ghz-wireless-mouse-with-up-to-1200-dpi-power-saving-original-imagnyc4svx8m5dc.jpeg",
    price: 799.00,
    oldPrice: 1299.00,
    stock: 100,
    category: "Accessories"
  },
  {
    title: "4K LED TV",
    description: "55-inch smart 4K TV with Dolby Vision and Android OS.",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv4QM1Pq_IUkODuPEfqT26_5vLVkW8wtsBmeB8565K_78DAF30WP6g38sOY_MeY1xDK3B2IiRHWKhvcj5SkBBaBZylTFl37ZaQv87iVAE",
    price: 42999.00,
    oldPrice: 54999.00,
    stock: 10,
    category: "Electronics"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with 360° sound and 12-hour battery.",
    image: "https://m.media-amazon.com/images/I/812CpadVoEL.jpg",
    price: 1999.00,
    oldPrice: 3499.00,
    stock: 40,
    category: "Audio"
  },
  {
    title: "Smartwatch Pro",
    description: "Smartwatch with heart rate monitor and AMOLED display.",
    image: "https://m.media-amazon.com/images/I/71MS0yt1jtL.jpg",
    price: 3999.99,
    oldPrice: 5999.99,
    stock: 75,
    category: "Wearable"
  },
  {
    title: "Gaming Laptop",
    description: "High-performance laptop with RTX 4060 GPU and 16GB RAM.",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTREqNIouKdS_WYdeT0gorsuNYNlR8NrFDOEQO8jADlGivcDoDP5DDdarvxRAZJE56uV5mDGNcIOGJFHkQ5vy0X7i7IhvLydR1nGdbbyCodE6qb8eCwFNhQAw",
    price: 85999.99,
    oldPrice: 99999.99,
    stock: 20,
    category: "Computer"
  }
];

const container = document.getElementById("product-container");

// Toast function for Add to Cart (reuse if available)
function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'nav-toast';
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "card";

  // Initial quantity
  let quantity = 1;

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <p><span class="price">₹${product.price}</span> <span class="old-price">₹${product.oldPrice}</span></p>
    <p>Total Stock: ${product.stock}</p>
    <p>Category: ${product.category}</p>
    <div class="quantity">
    <button id="minus-${index}">-</button>
    <span id="qty-${index}">${quantity}</span>
    <button id="plus-${index}">+</button>
    </div>
    <button class="add-to-cart">Add To Cart</button>
  `;

  container.appendChild(card);

  // Handle quantity buttons
  document.getElementById(`plus-${index}`).addEventListener('click', () => {
    if (quantity < product.stock) {
      quantity++;
      document.getElementById(`qty-${index}`).textContent = quantity;
    }
  });

  document.getElementById(`minus-${index}`).addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      document.getElementById(`qty-${index}`).textContent = quantity;
    }
  });

  // Add to Cart button event
  card.querySelector('.add-to-cart').addEventListener('click', () => {
    showToast('Cart is added!');
  });
});
