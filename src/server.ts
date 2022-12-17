import express from "express";
import USERrouter from "./routes/UserRoutes";
import PRODUCTrouter from "./routes/ProductRouts";
import loginrouts from "./routes/LoginRouts";
import OrderRouter from "./routes/OrderRouts";

const app = express();
const PORT = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Running Node with Express and Typescript",
  });
});
app.use("/user", USERrouter);
app.use("/products", PRODUCTrouter);
app.use("/login", loginrouts);
app.use("/order", OrderRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
export default app;
