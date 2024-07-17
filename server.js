const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/contacto', (req, res) => {
    const formData = req.body;

    fs.writeFile('api/contacto.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error('Error al guardar el archivo', err);
            return res.status(500).json({ message: 'Error al guardar el archivo' });
        }

        res.json({ successMessage: 'El formulario se ha enviado correctamente.' });
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
