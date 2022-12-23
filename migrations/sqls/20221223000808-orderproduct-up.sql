/* Replace with your SQL commands */

Create TABLE OrderProduct(
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES Product(id),
    CONSTRAINT fk_order FOREIGN KEY(order_id) REFERENCES Orders(id)
);