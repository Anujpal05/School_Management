import express from "express";
import bodyParser from "body-parser";
import schoolRouter from "./Routes/schoolRouter.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use("/api/v1", schoolRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
