import { exit } from "process";
import database from "../database/connectDB";

import { Order } from "../types/ordertype";

class OrderModel {
  async createorder(order: Order) {
    try {
      const Connenction = await database.connect();
      const results = await Connenction.query(
        `INSERT INTO orders(count,user_id,on_active)VALUES(${order.count},${order.user_id},${order.on_active}) RETURNING *;`
      )
        .then((resp) => {
          const list_product = order.product_id;
          for (let index = 0; index < list_product.length; index++) {
            Connenction.query(
              `INSERT INTO orderproduct(order_id,product_id) VALUES(${resp.rows[0].id},${list_product[index]}) RETURNING *`
            ).catch((err) => {
              return { err: err };
            });
          }
          return { massage: "created Order" };
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
