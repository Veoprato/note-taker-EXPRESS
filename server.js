const htmlRoutes = require('./routes/htmlRoutes')

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static('public'));

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is live! Port ${PORT}`);
})