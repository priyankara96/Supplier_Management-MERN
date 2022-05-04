const mongoose = require('mongoose');
const Payment_DetailsSchema = new mongoose.Schema({

    SuppName:{
        type:String,
        required:true
    },

    NICnum:{
        type:String,
        required:true
    },

    MobileNum:{
        type:String,
        required:true
    },

    Bank:{
        type:String,
        required:true
    },

    PassBook:{
        type:String,
        required:true
    },

    AccountNumber:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('Payment_Details',Payment_DetailsSchema);

