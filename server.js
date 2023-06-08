const express = require('express');
const cors = require("cors");
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/passwords', passwordRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port);
})