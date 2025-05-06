import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Registrar usuario
app.post('/api/registrar', async (req, res) => {
    const { usuario, contrasena } = req.body;

    try {
        await pool.query(
            'INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)',
            [usuario, contrasena]
        );
        res.json({ mensaje: 'Usuario registrado' });
    } catch (err) {
        res.status(500).json({ error: 'Error en el registro' });
    }
});

// Guardar mensaje
app.post('/api/contacto', async (req, res) => {
    const { usuario, mensaje } = req.body;

    try {
        await pool.query(
            'INSERT INTO mensajes (usuario, mensaje) VALUES (?, ?)',
            [usuario, mensaje]
        );
        res.json({ mensaje: 'Mensaje guardado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al guardar mensaje' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
