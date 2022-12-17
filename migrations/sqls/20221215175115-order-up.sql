/* Replace with your SQL commands */

CREATE TABLE Orders(
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    count INT NOT NULL,
    user_id INT NOT NULL,
    on_active BOOLEAN,
    CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES Product(id),
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES Users(id)
);