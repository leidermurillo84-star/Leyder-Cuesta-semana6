const express = require('express');
const app = express();
const PORT = 3000;

// Criterio: El servidor usa express.json()
app.use(express.json());

// Criterio: Ruta /registro
app.post('/registro', (req, res) => {
    // Criterio: Uso de req.body
    const datosPersona = req.body;
    console.log("Datos recibidos en registro:", datosPersona);
    
    res.json({
        mensaje: "Registro recibido con éxito en el servidor",
        datos: datosPersona
    });
});

// Criterio: Ruta /incidencia
app.post('/incidencia', (req, res) => {
    // Criterio: Uso de req.body
    const datosIncidencia = req.body;
    console.log("Datos recibidos en incidencia:", datosIncidencia);
    
    res.json({
        mensaje: "Incidencia reportada con éxito en el servidor",
        datos: datosIncidencia
    });
});

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor pedagógico corriendo en http://localhost:${PORT}`);
});