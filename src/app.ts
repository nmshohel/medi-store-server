import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';
import { medicineRouter } from "./modules/medicine/medicine.router";
import { orderRouter } from "./modules/order/order.router";
import { userRouter } from "./modules/user/user.router";
import { categoryRouter } from "./modules/category/category.router";
const app: Application = express();
app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000", // client side url
    credentials: true
}))
app.use(express.json());
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use("/api/medicines", medicineRouter);
app.use("/api/categoris", categoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send("Hello, Medistore!");
});

export default app;