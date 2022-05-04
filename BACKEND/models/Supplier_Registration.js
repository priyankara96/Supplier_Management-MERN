const mongoose = require('mongoose');
const Supplier_RegistrationSchema = new mongoose.Schema({

    SupplierName:{
        type:String,
        required:true
    },

    NIC:{
        type:String,
        required:true
    },

    Address:{
        type:String,
        required:true
    },

    MobileNumber:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },

    Item:{
        type:String,
        required:true
    },

    newDate:{
        type:String,
        required:true
    },

    Remark:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('Supplier_Registration',Supplier_RegistrationSchema);

