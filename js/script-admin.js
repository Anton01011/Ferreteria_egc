const form = document.getElementById('product-form');
      const productList = document.getElementById('product-list');

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const productId = document.getElementById('product-id').value;
        const name = document.getElementById('product-name').value;
        const description = document.getElementById('product-description').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const image = document.getElementById('product-image').files[0]; // Get selected image

        if (name && description && !isNaN(price)) {
          if (productId) {
            // Edit existing product
            // Implement the logic here to update the product
          } else {
            // Add new product
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <div class="product-item mb-3">
                <div class="product-image">
                  <img src="${URL.createObjectURL(image)}" alt="${name}" class="img-fluid">
                </div>
                <div class="product-details">
                  <h4>${name}</h4>
                  <p>${description}</p>
                  <p class="product-price">$${price}</p>
                  <button class="btn btn-outline-danger delete-product">Eliminar</button>
                </div>
              </div>
            `;
            productList.appendChild(listItem);

            // Clear form fields
            form.reset();
          }
        }
      });

      productList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-product')) {
          // Implement the logic here to delete the product
          event.target.closest('.product-item').remove();
        }
      });