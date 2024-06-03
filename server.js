import express from "express";
import dotenv from "dotenv";
import ConnectionDB from "./config/db.js";
import ReportRouter from "./routes/ReportRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route
app.use("/api/report/", ReportRouter);

ConnectionDB();

// port
const port = process.env.PORT || 3000;  // memastikan default port 3000 jika process.env.PORT tidak diatur

// server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
