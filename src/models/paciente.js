const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({


  
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    
    fechaNacimiento: {
        type: Date,
        required: false,
    },
    genero: {
        type: String,
        required: false,
    },
    tipoSangre: {
        type: String,
        required: true,
    },
    sintomas: {
        type: String,
        required: false,
    },
    fechaAdmision: {
        type: Date,
        required: true,
    },
    direccion: {
        type: String,
        required: false,
    },
    
    Alergias: {
        type: String,
        required: false,
    },
    estadoIngreso: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Paciente", pacienteSchema);
