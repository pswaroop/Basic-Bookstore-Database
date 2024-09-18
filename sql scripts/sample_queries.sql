-- Get all books by specific author
SELECT b.title, b.price, b.stock
FROM Books b
JOIN Authors a ON b.author_id = a.author_id
WHERE a.name = 'J.K. Rowling';

-- Find customers who have made more than one order:
SELECT c.name, COUNT(o.order_id) AS order_count
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
HAVING COUNT(o.order_id) > 1;

-- Get the total sales for a specific book:
SELECT b.title, SUM(od.quantity * od.price) AS total_sales
FROM OrderDetails od
JOIN Books b ON od.book_id = b.book_id
WHERE b.title = 'A Game of Thrones'
GROUP BY b.title;

