// backend/index.js
import express, { Request, Response } from "express";
const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
