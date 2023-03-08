import express from "express"; //porque se usa ESmodules
//si se usa commonJS --> const express = require("express")
import diariesRoutes from "./routes/diaries";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  //se pone _req para evitar advertencia de que no se usa
  console.log("SOY GET");
  res.send("funciona");
});

app.use("/api/diaries", diariesRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
