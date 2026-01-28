const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin:'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods'],
    credentials: true,
    maxAge: 600
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ exteneded: true }));

const db = require('./app/models');
const Role = db.role;
db.sequelize.sync({ }).then(() => {
    console.log('DB Connected')
});

// Role implementation
function initial() {
    Role.create({
        id: 1,
        name: 'user'
    })
    Role.create({
        id: 2,
        name: 'admin'
    })
}
// simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome from the server" });
});

require('./app/routes/auth.routes.js')(app);
require('./app/routes/user.routes.js')(app);

// setting up port/listen requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});