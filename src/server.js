const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database.js');
require('dotenv').config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());


app.use('/api/tasks', require('./routes/taskRoutes.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando automaticamente na porta: http://localhost:${PORT}`));