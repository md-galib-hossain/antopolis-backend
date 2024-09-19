import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
//application routes
app.use("/api");

app.get("/", (req: Request, res: Response) => {
  res.send("Hey root route working!");
});


export default app;
