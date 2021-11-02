import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req:Request, res: Response) => {
    console.log("trololo");
    res.send("ok!!!!");
});

app.listen(3000, () => {
    console.log("server running @ port 3000");
});
