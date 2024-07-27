import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// mail route..

import mailrt  from './mail.js';

let app=express();

// routes...
let MailRoute=mailrt.mailRoute;

const url=process.env.CLIENT_URL
const whitelist = [url];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/sendmail",MailRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
  console.log(`Express listening on port ${PORT}`);
})
