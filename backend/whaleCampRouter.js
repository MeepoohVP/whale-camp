const exp = require('express');
const app = exp();
const port = 4006;
const bodyParser = require('body-parser');
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
app.use(exp.json());
app.use(cors());
app.use(bodyParser.json());

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

app.get("/campaign",(req,res)=>{
  const q="SELECT DISTINCT campaignName, imgLink, rewardPoint, campaignsDetail FROM campaign where status='Approve'"
  dbconnect.query(q,(err,data)=>{
      if(err) throw err;
      res.json(data);
  })
})

app.get("/posts",(req,res)=>{
  const q="select imgLink,topic,postDetail from post where status='Approve'"
  dbconnect.query(q,(err,data)=>{
      if(err) throw err;
      res.json(data);
  })
})

app.get("/rewards",(req,res)=>{
  const q="select imgLink,rewardName,rewardPoint from reward where userId is null"
  dbconnect.query(q,(err,data)=>{
      if(err) throw err;
      res.json(data);
  })
})

app.post("/historyexchange",(req,res)=>{
  let userData = { 
    mail: req.body.email
  };
  const q=`select reward.rewardName from reward join user on reward.userId = user.userId where user.email='${userData.mail}' and reward.userId is not null`
  dbconnect.query(q,(err,data)=>{
      if(err) throw err;
      res.json(data);
  })
})

app.post("/historyjoin",(req,res)=>{
  let userData = { 
    mail: req.body.email
  };
  const q=`select campaign.campaignName from campaign join user on campaign.userId = user.userId where user.email='${userData.mail}' and campaign.userId is not null`
  dbconnect.query(q,(err,data)=>{
      if(err) throw err;
      res.json(data);
  })
})

app.post("/deleteHistory", (req, res) => {
  let userData = { 
    mail: req.body.email
  };
  const q = `delete from campaign where userId=(select userId from user where email='${userData.mail}')`;
  dbconnect.query(q,(err,data)=>{
    if(err) throw err;
    res.json(data);
})
})

app.post("/login", (req, res) => {
    let userData = { 
      emailAddress: req.body.email,
      passw: req.body.password
    };
  
    let checkLogin = `INSERT INTO login(userId, userName, email) 
                      SELECT u.userId, u.userName, u.email 
                      FROM user u 
                      WHERE u.email = ?`;
  
    let q = `SELECT * FROM user WHERE email = ? AND password = ?`;
    
    // First query: Check login credentials
    dbconnect.query(q, [userData.emailAddress, userData.passw], (err, data) => {
      if (err) {
        console.error('Error executing query:', err.stack);
        return res.status(500).json({ error: 'Database query error' });
      }
      
      if (data.length > 0) {
        // User found, proceed with inserting login record
        dbconnect.query(checkLogin, [userData.emailAddress], (err, result) => {
          if (err) {
            console.error('Error executing insert:', err.stack);
            return res.status(500).json({ error: 'Database insert error' });
          }
          return res.json(data);
        });
      } else {
        return res.json({ message: 'No record' });
      }
    });
  });

  app.post("/logout", (req, res) => {

    return res.json({ message: 'Logout successful' });
  });
app.post('/register', (req, res)=>{
    let userData = { emailAddress: req.body.email,
                usr: req.body.username,
                passw: req.body.password,
                cfmPassw: req.body.cfPassword
     };
    let sql = `insert ignore into user(userName, email, password, point) values 
            ('${userData.usr}', '${userData.emailAddress}', '${userData.passw}', 0)`;
    console.log(sql);
    if(userData.cfmPassw===userData.passw){
        dbconnect.query(sql, (errorSQL, result)=> {
            if(errorSQL) throw errorSQL;
            res.json('User registered');
            res.end("");
        })
    }
    else{
        console.log("cannot add");
    }
})
app.post('/newcampaign', (req, res)=>{
  let userData = { cName: req.body.campName,
                    cDetail: req.body.campDt,
                    cPic: req.body.pic,
                    ct: req.body.contact,
                    cRewardP: req.body.rwPoint
   };
  let sql = `insert into campaign(campaignName, campaignsDetail, imgLink, contact, rewardPoint, status) values 
          ('${userData.cName}', '${userData.cDetail}', '${userData.cPic}', '${userData.ct}', ${userData.cRewardP}, 'waiting')`;
  console.log(sql);
  dbconnect.query(sql, (errorSQL, result)=> {
    if(errorSQL) throw errorSQL;
    res.json('create campaign');
    res.end("");
})
})

app.post('/newpost', (req, res)=>{
  let userData = { cName: req.body.topic,
                    cDetail: req.body.detail,
                    cPic: req.body.pic,
   };
  let sql = `insert into post(topic, postDetail, imgLink, status) values 
          ('${userData.cName}', '${userData.cDetail}', '${userData.cPic}', 'waiting')`;
  console.log(sql);
  dbconnect.query(sql, (errorSQL, result)=> {
    if(errorSQL) throw errorSQL;
    res.json('create campaign');
    res.end("");
})
})



app.post('/exchange', (req, res) => {
  let userData = { 
    cName: req.body.topic,
    cMail: req.body.email,
    cPoint: req.body.point
  };

  let updatePoint = `UPDATE user, reward SET point = point - ${userData.cPoint}, amount = amount - 1 WHERE email = '${userData.cMail}' and rewardName='${userData.cName}'`;
  let sql = `INSERT INTO reward (rewardName, rewardDetail, userId, amount, rewardPoint, imgLink) 
             SELECT rewardName, rewardDetail, (SELECT userId FROM user WHERE email = '${userData.cMail}'), amount, rewardPoint, imgLink 
             FROM reward 
             WHERE rewardName = '${userData.cName}'`;

  dbconnect.query(sql, (errorSQL, result) => {
    if (errorSQL) {
      console.error(errorSQL);
      return res.status(500).json({ error: 'Database query failed' });
    }

    dbconnect.query(updatePoint, (err, rs) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update points' });
      }

      res.json('Exchange success and points updated');
    });
  });
});

app.post('/joincampaign', (req, res) => {
  let userData = { 
    cName: req.body.topic,
    cMail: req.body.email
  };
  let sql = `INSERT INTO campaign (userId, campaignName, campaignsDetail, imgLink, contact, rewardPoint, status) 
             SELECT (SELECT userId FROM user WHERE email = '${userData.cMail}'), campaignName, campaignsDetail, imgLink, contact, rewardPoint, status 
             FROM campaign
             WHERE campaignName = '${userData.cName}'`;

  dbconnect.query(sql, (errorSQL, result) => {
    if (errorSQL) {
      console.error(errorSQL);
      return res.status(500).json({ error: 'Database query failed' });
    }
  });
});

app.listen(port, '10.4.53.25', () => {
    console.log('server listening on port 8080')
});