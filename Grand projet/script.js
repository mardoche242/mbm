// Détection et configuration du pays
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('country-modal');
    const countryOptions = document.querySelectorAll('.country-option');
    
    // Vérifier si le pays est déjà choisi
    const savedCountry = localStorage.getItem('userCountry');
    
    // Détection automatique du pays (API gratuite)
    function detectCountry() {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          if (['CG', 'FR', 'SN'].includes(data.country)) {
            setCountry(data.country);
            modal.style.display = 'none';
          }
        })
        .catch(() => modal.style.display = 'flex');
    }
    
    // Configurer le pays
    function setCountry(countryCode) {
      localStorage.setItem('userCountry', countryCode);
      
      // Personnalisation selon le pays
      switch(countryCode) {
        case 'CG': // Congo
          document.documentElement.lang = 'fr';
          document.body.classList.add('country-cg');
          document.body.classList.remove('country-fr', 'country-sn');
          break;
          
        case 'FR': // France
          document.documentElement.lang = 'fr';
          document.body.classList.add('country-fr');
          document.body.classList.remove('country-cg', 'country-sn');
          break;
          
        case 'SN': // Sénégal
          document.documentElement.lang = 'fr';
          document.body.classList.add('country-sn');
          document.body.classList.remove('country-cg', 'country-fr');
          break;
      }
      
      // Mettre à jour les éléments spécifiques
      updatePhonePrefixes(countryCode);
    }
    
    // Mettre à jour les indicatifs téléphoniques
    function updatePhonePrefixes(countryCode) {
      const prefixes = {
        'CG': '+242',
        'FR': '+33', 
        'SN': '+221'
      };
      
      document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.value = prefixes[countryCode];
      });
    }
    
    // Gestion des clics sur les options
    countryOptions.forEach(option => {
      option.addEventListener('click', function() {
        const countryCode = this.getAttribute('data-country');
        setCountry(countryCode);
        modal.style.display = 'none';
      });
    });
    
    // Afficher le modal si aucun pays n'est détecté/sélectionné
    if (!savedCountry || !['CG', 'FR', 'SN'].includes(savedCountry)) {
      detectCountry();
    } else {
      setCountry(savedCountry);
    }
  });
















  


//   les produits
        
        
        
                const products = [
                     {      id: 1,
                             name: "Mini Videoprojecteur 4K, Retroprojecteur Portable",
                     description: "Mini vidéoprojecteur 4K avec connectivité sans fil.",
                     price: 50,
                             category: "électronique",
                             image: "https://www.cdiscount.com/pdt2/1/2/4/1/700x700/aaaan61124/rw/hippus-mini-videoprojecteur.jpg"
                       },
                     {
                             id: 2,
                                name: "Support de Téléphone Portable",
                             description: "Support de téléphone portable pliable et ajustable.",
                             price: 4,
                             category: "électronique",
                             image: "https://site.glotelho.cm/media/catalog/product/cache/3d5322e2293df1ca8e64a115bdb04917//s/u/support-de-t_l_phone-portable-et-tablette-tycom-pliable.jpg"
                         },
                         {
                                 id: 3,
                                 name: "Apple AirPods Max (Original)",
                                 description: "Casque sans fil avec réduction de bruit active.",
                                 price: 8,
                                 category: "électronique",
                                 image: "https://devitech-senegal.com/storage/apple-airpods-max-original-1-800x800.jpg"
                             
                     },
                     {
                         id: 4,
                         name: "Souris sans fil",
                         description: "Pour un confort optimal, cette souris sans fil est rechargeable et ergonomique.",
                         price: 4,
                         category: "électronique",
                         image: "https://www.keyouest.fr/wp-content/uploads/2021/12/souris-sans-fil-hybride-rechargeable-noire-pas-cher-KeyOuest.png"
                     },
                     {
                         id: 5,
                         name: "Power Bank Apple sans fil MagSafe",
                         description: "Batterie externe sans fil pour iPhone avec technologie MagSafe.",
                         price: 12,
                         category: "électronique",
                         image: "https://res.cloudinary.com/dai2jq1oe/image/upload/v1723716321/rreg7wlg9aa1bomrghwq.webp"
                     },
                     {
                         id: 6,
                         name: "power bank 10000 mAh",
                         description: "Batterie externe universelle 10000 mAh avec charge rapide 2.25W et 3 connexions.",
                         price: 10,
                         category: "électronique",
                         image: "https://cdn2.coolaccesorios.com/56822-thickbox_default/universal-external-battery-power-bank-10000-mah-fast-charging-225w-3a-3-connections-black.jpg"
                     },
                    {
                         id: 7,
                         name: "Power Bank 20000mAh",
                         description: "Batterie externe solaire avec une capacité de 20000mAh, idéale pour les voyages.",
                         price: 15,
                         category: "électronique",
                         image: "https://peelagreen.fr/cdn/shop/files/BatterieexternesolaireRoG_Crossfire20000mAh-Hautecapacite.jpg?v=1698272103"
                     },
                     {
                         id: 8,
                        name: "airpods pro 6s (Original) sans fil",
                         description: "Écouteurs sans fil avec réduction de bruit active.",
                         price: 5,
                         category: "électronique",
                         image: "https://i0.wp.com/www.soumari.com/wp-content/uploads/2022/06/Airpods-Pro-6S.jpg?fit=800%2C800&ssl=1"
                     },
                     {
                         id: 9,
                         name: "Trépied De Suivi",
                         description: "caméra de suivi automatique du visage, trépied de suivi automatique.",
                         price: 12,
                         category: "électronique",
                         image: "https://m.media-amazon.com/images/I/71cvesxkN3L._AC_UF894,1000_QL80_.jpg"
                     },
                     {
                         id: 10,
                         name: "Ring Light 14 pouces avec sa commande",
                         description: "Anneau lumineux de 14 pouces avec trépied réglable.",
                         price: 10,
                         category: "électronique",
                         image: "https://www.rekfi.com/storage/2024/03/Ringlight14inch.webp"
                 },
                     {
                         id: 11,
                         name: "ring light 18 pouces trois trépieds",
                         description: "Smartphone haut de gamme avec écran AMOLED et triple caméra.",
                         price: 20,
                         category: "électronique",
                         image: "https://www.sodishop.com/media/2021/09/Led-soft-ring-light-RL-18.jpeg"
                     },
                 {
                     id: 12,
                     name: "Casque Sans Fil charge rapide",
                     description: "Casque Bluetooth avec réduction de bruit active.",
                     price: 8,
                     category: "électronique",
                     image: "https://nova.sn/31955-medium_default/oraimo-boompop-2-enc-casques-sans-fil-ohp610.jpg"
                    },
                //     // ... autres produits avec images
                ];
        // ];

        // Panier
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Éléments du DOM
        const productsPage = document.getElementById('products-page');
        const cartPage = document.getElementById('cart-page');
        const productsLink = document.getElementById('products-link');
        const cartLink = document.getElementById('cart-link');
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        const cartSummary = document.getElementById('cart-summary');
        const cartTotal = document.getElementById('cart-total');
        const whatsappCheckout = document.getElementById('whatsapp-checkout');

        // Navigation
        productsLink.addEventListener('click', (e) => {
            e.preventDefault();
            productsPage.classList.remove('hidden');
            cartPage.classList.add('hidden');
            productsLink.classList.add('active');
            cartLink.classList.remove('active');
        });

        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            productsPage.classList.add('hidden');
            cartPage.classList.remove('hidden');
            productsLink.classList.remove('active');
            cartLink.classList.add('active');
            updateCartDisplay();
        });

        // Afficher les produits
        function displayProducts(productsToDisplay) {
            const container = document.getElementById('products-container');
            container.innerHTML = '';

            if (productsToDisplay.length === 0) {
                container.innerHTML = '<div class="no-results">Aucun produit trouvé.</div>';
                return;
            }

            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">${product.price.toFixed(3)} F</div>
                    <div class="product-description">${product.description}</div>
                    <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
                `;
                container.appendChild(productCard);
            });

            // Ajouter les événements aux boutons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }

        // Ajouter au panier
        function addToCart(e) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            saveCart();
            updateCartCount();
            
            // Rediriger vers le panier
            productsPage.classList.add('hidden');
            cartPage.classList.remove('hidden');
            productsLink.classList.remove('active');
            cartLink.classList.add('active');
            updateCartDisplay();
        }

        // Mettre à jour l'affichage du panier
        function updateCartDisplay() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                emptyCart.classList.remove('hidden');
                cartSummary.classList.add('hidden');
            } else {
                emptyCart.classList.add('hidden');
                cartSummary.classList.remove('hidden');
                
                let total = 0;
                
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <div class="product-title">${item.name}</div>
                            <div class="product-price">${item.price.toFixed(3)} F</div>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <div class="cart-item-price">${itemTotal.toFixed(3)} F</div>
                    `;
                    cartItems.appendChild(cartItem);
                });
                
                cartTotal.textContent = total.toFixed(3);
                
                // Ajouter les événements aux boutons +/-
                document.querySelectorAll('.quantity-btn').forEach(button => {
                    button.addEventListener('click', updateQuantity);
                });
            }
        }

        // Mettre à jour la quantité
        function updateQuantity(e) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            
            if (e.target.classList.contains('minus')) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== productId);
                }
            } else if (e.target.classList.contains('plus')) {
                item.quantity += 1;
            }
            
            saveCart();
            updateCartCount();
            updateCartDisplay();
        }

        // Commander via WhatsApp
        whatsappCheckout.addEventListener('click', () => {
            let message = "Bonjour, je souhaite commander les articles suivants:\n\n";
            
            cart.forEach(item => {
                message += `- ${item.name} (x${item.quantity}) : ${(item.price * item.quantity).toFixed(2)} F\n`;
            });
            
            message += `\nTotal: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} F`;
            message += "\n\nMerci !";
            
            const phoneNumber = "+221777269484"; // Remplacez par votre numéro WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });

        // Sauvegarder le panier
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Mettre à jour le compteur du panier
        function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = count;
        }

        

        // Recherche de produits
        function searchProducts() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        }

        // Initialisation
        document.getElementById('search-input').addEventListener('input', searchProducts);
        updateCartCount();
        displayProducts(products);















