const mongoose = require('mongoose');
const Supplier_PaymentSchema = new mongoose.Schema({

    SuppID:{
        type:String,
        required:true
    },

    InvoiceNo:{
        type:String,
        required:true
    },

    SupplierNa:{
        type:String,
        required:true
    },

    PaymentDate:{
        type:String,
        required:true
    },

    Amount:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('Supplier_Payment',Supplier_PaymentSchema);

