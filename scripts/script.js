const products = [
    { id: 'product1', name: 'Product 1' },
    { id: 'product2', name: 'Product 2' },
    { id: 'product3', name: 'Product 3' },
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.getElementById('reviewForm').addEventListener('submit', function () {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
});
