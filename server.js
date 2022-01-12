const express = require('express');
const bodyParser = require('body-parser');
const {userRoutes, doctorRoutes, specialitiesRoutes, cabinetRoutes, postRoutes, } = require('./routes');


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('api/users', userRoutes);
app.use('api/doctors', doctorRoutes);
app.use('api/specialities', specialitiesRoutes);
app.use('api/cabinet', cabinetRoutes);
app.use('api/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server running on : http://localhost:${port}`)
})