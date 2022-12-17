import database from "../database/connectDB";

import { Order } from "../types/ordertype";

class OrderModel {
  async createorder(order: Order) {
    try {
      const Connenction = await database.connect();
      const results = await Connenction.query(
        `INSERT INTO orders (product_id,count,user_id,on_active) VALUES (${order.product_id},${order.count},${order.user_id},${order.on_active}) RETURNING *`
      )
        .then((resp) => {
          return resp.rows[0];
        })
        .catch((err) => {
          return { err: err.detail };
        });
      Connenction.release();
      return results;
    } catch (error) {
      return { err: error };
    }
  }
}
export default OrderModel;

//
