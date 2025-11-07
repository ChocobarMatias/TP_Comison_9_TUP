const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const {usuariosRouter} = require('./routers/usuarios.Routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet())
