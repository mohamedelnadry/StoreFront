"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const ProductRouts_1 = __importDefault(require("./routes/ProductRouts"));
const LoginRouts_1 = __importDefault(require("./routes/LoginRouts"));
const OrderRouts_1 = __importDefault(require("./routes/OrderRouts"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Running Node with Express and Typescript",
    });
});
app.use("/user", UserRoutes_1.default);
app.use("/products", ProductRouts_1.default);
app.use("/login", LoginRouts_1.default);
app.use("/order", OrderRouts_1.default);
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});
exports.default = app;
