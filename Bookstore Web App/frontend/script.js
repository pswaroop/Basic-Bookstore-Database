document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display data
    const fetchAndDisplay = async (endpoint, elementId) => {
        try {
            const response = await fetch(`http://localhost:3000/${endpoint}`);
            const data = await response.json();
            const tbody = document.getElementById(elementId);
            tbody.innerHTML = ''; // Clear existing content

            if (data.length === 0) {
                const row = tbody.insertRow();
                const cell = row.insertCell(0);
                cell.colSpan = 3; // Adjust according to the number of columns
                cell.textContent = 'No data available';
                return;
            }

            data.forEach(item => {
                const row = tbody.insertRow();
                // Change the following based on your data structure
                for (const key in item) {
                    const cell = row.insertCell();
                    cell.textContent = item[key];
                }
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
