document.addEventListener("DOMContentLoaded", function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                const productName = document.createElement('h3');
                productName.textContent = product.name;

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;

                const productLink = document.createElement('a');
                productLink.href = product.link;
                productLink.textContent = 'Buy Now';
                productLink.target = '_blank';

                productDiv.appendChild(productName);
                productDiv.appendChild(productImage);
                productDiv.appendChild(productLink);

                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});
