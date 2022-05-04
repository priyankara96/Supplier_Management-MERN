const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv')
dotenv.config()
const app = express();

const postRoutesSupplier_Registration = require('./routes/Supplier_Registration');
const postRoutesPayment_Details = require('./routes/Payment_Details');
const postRoutesSupplier_Payment = require('./routes/Supplier_Payment');

app.use(bodyParser.json());
app.use(cors());

app.use(postRoutesSupplier_Registration);
app.use(postRoutesPayment_Details);
app.use(postRoutesSupplier_Payment);
const PORT =8000;



const DB_URL = process.env.DB_URI;


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});