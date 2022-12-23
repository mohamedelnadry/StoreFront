import database from "../database/connectDB";

import { Product } from "../types/productype";

class ProductModel {
  async createproduct(product: Product) {
    try {
      const Connenction = await database.connect();
      const SQL = "INSERT INTO Product (name,price) VALUES ($1,$2) RETURNING *";
      const results = await Connenction.query(SQL, [
        product.name,
        product.price,
      ]);
      Connenction.release();
      return {
        message: "Created",
        data:results.rows[0]
      };
    } catch (error) {
      return{"error":error}
    }
  }
  async AllProducts() {
    try {
      const Connenction = await database.connect();
      const SQL = "SELECT * FROM product";
      const AllProducts = await Connenction.query(SQL);
      Connenction.release();
      return AllProducts.rows;
    } catch (error) {
      console.log(error);
    }
  }
  async GetProductById(id: number) {
    try {
      const connection = await database.connect();
      const sql = "SELECT * FROM Product WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err: any) {
      throw new Error(`Can't find product ${id}, ${err.message}`);
    }
  }
  async DeleteProduct(id: number) {
    try {
      const connection = await database.connect();
      const sql = "DELETE FROM Product WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return {
        "message": "deleted"
      };
    } catch (err: any) {
      return { "err": err.detail }
    }
  }
  async UpdateProduct(product: Product) {
    try {
      const Connenction = await database.connect();
      const result = await Connenction.query(`SELECT * FROM product WHERE id = '${product.id}'`)
      if (result.rowCount == 0) {
        return { error: "product not found" };
      }
      const results = await Connenction.query(`UPDATE product SET name='${product.name}',price='${product.price}' WHERE id='${product.id}' RETURNING *;`)

      Connenction.release();
      return {
        message: "Updated",
        data: results.rows[0]
      };
    } catch (error) {
      return { "error": error }
    }
  }

}
export default ProductModel;
