//JS code to fetch data from backend and display it
document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display data
    const fetchAndDisplay = async (endpoint, elementId) => {
        try {
            const response = await fetch(`http://localhost:3000/${endpoint}`);
            const data = await response.json();
            const list = document.getElementById(elementId);
            list.innerHTML = '';
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = JSON.stringify(item);
                list.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch and display data
    fetchAndDisplay('books', 'books-list');
    fetchAndDisplay('authors', 'authors-list');
    fetchAndDisplay('customers', 'customers-list');
    fetchAndDisplay('orders', 'orders-list');
    fetchAndDisplay('orderdetails', 'orderdetails-list');
});
