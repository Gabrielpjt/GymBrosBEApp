import express from "express";
import dotenv from "dotenv";
import ConnectionDB from "./config/db.js";
import ReportRouter from "./routes/ReportRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

//route
app.use("/api/report/", ReportRouter);

ConnectionDB();

//port
const port = process.env.port;

//server
app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
