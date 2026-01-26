import express, { Application } from "express";

const app: Application = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello, MediStore! Server is running!");
});

export default app;