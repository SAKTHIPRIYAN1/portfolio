import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// mail route..

import mailrt  from './mail.js';

let app=express();

// routes...
let MailRoute=mailrt.mailRoute;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/sendmail",MailRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
  console.log(`Express listening on port ${PORT}`);
})
