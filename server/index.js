const express = require('express');

const PORT = 8080;
const app = express();
const router = require('./routes');

app.use('/api', router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
