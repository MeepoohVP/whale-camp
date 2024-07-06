const exp = require('express');
const app = exp();
const port = 4006;
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();
const dbconnect = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
    port: process.env.DBPORT
});
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from our server!');
});

app.get("/user",(req,res)=>{
    const q="SELECT * FROM user"
    dbconnect.query(q,(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
})

app.listen(port, '10.4.53.25', () => {
    console.log('server listening on port 8080')
});