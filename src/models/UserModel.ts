import database from "../database/connectDB";
import bcrypt from "bcrypt";
import config from "../configration/config";
import { User } from "../types/UserType";
import jwt, { Secret } from "jsonwebtoken";

class UserModel {
  async CreateUser(user: User) {
    try {
      const Connenction = await database.connect();
      const query = await Connenction.query(
        `INSERT INTO Users (First_Name,Last_Name,Email,Password) VALUES ('${
          user.First_Name
        }','${user.Last_Name}','${user.Email}','${hashPassword(
          user.Password
        )}')RETURNING *`
      )
        .then((resp) => {
          return "Created";
        })
        .catch((err) => {
          if (err) {
            return err.message;
          }
        });
      Connenction.release();
      return query;
    } catch (error) {
      return error;
    }
  }
  async AllUsers() {
    try {
      const Connenction = await database.connect();
      const SQL = "SELECT * FROM Users";
      const Allusers = await Connenction.query(SQL);
      Connenction.release();
      return Allusers.rows;
    } catch (error) {
      console.log(error);
    }
  }
  async GetUserById(id: number) {
    try {
      const connection = await database.connect();
      // const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await connection.query(`SELECT * FROM users WHERE id=(${id})`).then(respo=>{
        if (respo.rows[0] == undefined) {
          return {"error":"user not found"}
        }        
        return respo.rows[0];
      }).catch(err=>{
          return {"err":err}
        }
      );
      connection.release();
      
      return result

    } catch (err: any) {
      throw new Error(`Can't find user ${id}, ${err.message}`);
    }
  }

  async DeleteUSer(id: number) {
    try {
      const connection = await database.connect();
      const sql = "DELETE FROM Users WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err: any) {
      throw new Error(`Can't delete user ${id}, ${err.message}`);
    }
  }

  async UpdateUser(user: User) {
    try {
      const Connenction = await database.connect();
      const query = await Connenction.query(
        `INSERT INTO Users (First_Name,Last_Name,Email,Password) VALUES ('${
          user.First_Name
        }','${user.Last_Name}','${user.Email}','${hashPassword(
          user.Password
        )}')RETURNING *`
      )
        .then((resp) => {
          return "Created";
        })
        .catch((err) => {
          if (err) {
            return err.message;
          }
        });
      Connenction.release();
      return query;
    } catch (error) {
      return error;
    }
  }

  async LoginUser(user: User) {
    try {
      const connection = await database.connect();
      const results = await connection
        .query(`SELECT * FROM Users WHERE Email LIKE '${user.Email}'`)
        .then(async (resp) => {
          if (resp.rowCount == 0) {
            return { error: "email dosn't match" };
          }
          const pass = resp.rows[0].password;
          const match = await bcrypt.compare(
            user.Password + config.Pepper,
            pass
          );
          if (match) {
            // create token
            const jwtSecretKey: Secret = config.jwt_secret_key as string;
            const data = {
              id: resp.rows[0].id,
              First_Name: resp.rows[0].First_Name,
              Last_Name: resp.rows[0].Lirst_Name,
              Email: resp.rows[0].Email,
            };
            const token = jwt.sign(data, jwtSecretKey);

            return { token: token };
          } else {
            return { err: "password dosn't match" };
          }
        });
      return results;
    } catch (error) {
      return error;
    }
  }
}
const hashPassword = (Password: string): string => {
  const Salt = Number(config.Salt);
  const Pepper = config.Pepper;
  return bcrypt.hashSync(`${Password}${Pepper}`, Salt);
};

export default UserModel;
