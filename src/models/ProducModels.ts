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
      return "Created";
    } catch (error) {
      console.log(error);
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
}
export default ProductModel;
