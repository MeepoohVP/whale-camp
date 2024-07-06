const exp = require('express');
const app = exp();
const port = 4006;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from our server!');
});

app.listen(port, '10.4.53.25', () => {
    console.log('server listening on port 8080')
});