import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173/"
}));

app.get('/api', (req, res) => {
    const filePath = path.join(__dirname, 'db.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading data.');
        }
        res.json({status: "success",  data: JSON.parse(data)});
    });

})

app.get('/', (req, res) => res.send("Backend is running successfully 😍"))

app.listen(port, () => console.log(`Backend is listening on port http://localhost:${port}`))