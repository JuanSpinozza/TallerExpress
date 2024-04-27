const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const pacienteRoutes = require("./routes/paciente");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json()); 

app.use("/api", pacienteRoutes); 
app.use(express.json());
// Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
// Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
