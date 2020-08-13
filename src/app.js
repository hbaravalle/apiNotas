require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

app.use(cookieParser({secret: process.env.COOKIE_PARSER_SECRET}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log("Servidor listo y corriendo en el puerto 3000"));