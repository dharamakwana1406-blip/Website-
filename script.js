//script.js
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}
  // Products array
  const products = {
    ethics:[
    { name: "casual kurti",img:"./Images/IMG-20260308-WA0070.jpg", feature:true,price:500,buttontext:"view product"
    }, // <-- This is the feature product
    { name: "casual printed kurti",
    img: "/IMG-20260306-WA0004.jpg",
    price:1500,
    feature:true 
    },
    { name: "tops", 
    img: "/tops.jpg",
    price:4000,
    feature:true
    },
    { name: "tops",
    price:300,
    img: "/tops2.jpg",
    feature:true
    },
    { name: "tops", 
    img: "/banner_p.png",
    price:2000,
    feature:true
    },
    { name: "printed kurti", 
    img:"/IMG-20260308-WA0008-removebg-preview.png",
    price:2500,
    feature:true
    },
        { name: "printed kurti", 
    img: "/IMG-20260308-WA0009-removebg-preview.png",
    price:2500,
    feature:true
    },
        { name: "printed kurti", 
    img: "/IMG_20250125_115659.jpg",
    price:2500,
    feature:true
    }
    
  ],
  partywear:[
    { name: "casual kurti",img:"/IMG-20260308-WA0070.jpg", feature:true,price:500,
    }, // <-- This is the feature product
    { name: "casual printed kurti",
    img: "/IMG-20260306-WA0004.jpg",
    price:1500,
    feature:true 
    },
     { name: "casual printed kurti",
    img: "/IMG-20260306-WA0004.jpg",
    price:1500,
    feature:true 
    }
    ],
  wastern:[
    { name: "pent-pair",
    img:"/IMG-20260306-WA0000.jpg",
    feature: true,
    price:500,
    }, // <-- This is the feature product
    { name: "kurti",
    img: "/IMG-20260306-WA0001.jpg",
    price:1500,
    feature:true 
    }
   
 ]
  };
function displayProducts(category,targetId) {
  const productList = document.getElementById(targetId);
  if (!productList) return;
  
  productList.innerHTML = ""; // Clear current items

  // Access the correct array (e.g., products["ethics"])
  const itemsToShow = products[category];

  itemsToShow.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" style="width:200px">
      <h3>${product.name}</h3>
      <div class="price">₹${product.price}</div>
      <button class="buy-btn">view product</button>
    `;
    const btn = div.querySelector('.buy-btn');
        btn.onclick = () => {
            showProductDetail(product);
        
        };
    productList.appendChild(div);
  });
}

// 2. Event Listeners go OUTSIDE the function so they only run once
document.querySelectorAll(".dropdown-menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    // If your links had data-category="ethics", this would work:
    // const cat = e.target.getAttribute("data-category");
    // displayProducts(cat);
  });
});

function showProductDetail(product) {
    const detailView = document.querySelector('.product_details');
    
    // Fill the detail section with the clicked product's info
    detailView.innerHTML = `
        <div class="modal-content">
            <span onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
            <img src="${product.img}" style="width:100%">
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <button class="addToCart">Add To Cart 🛒</button> 
        </div>
    `;
    
    detailView.style.display = "block";
}
// 3. Initial call
displayProducts("ethics");

