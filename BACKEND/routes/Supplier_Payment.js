const express = require('express');
const Posts = require('../models/Supplier_Payment');

const router = express.Router();

//save posts

router.post('/SupplierPayment/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post Save Successfully"
        });
    });
});

//get posts

router.get('/SupplierPayment',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post

router.get("/SupplierPayment/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts

router.put('/SupplierPayment/update/:id',(req,res) => {

    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {

            if(err){
                return res.status(400).json({
                    error:err
                });

            }

            return res.status(200).json({
                success: "Update Succesfully"
            });
        }
    );
});

//delete post

router.delete('/SupplierPayment/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err)return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return res.json({
            message:"Delete is Successful",deletedPost
        });
    });

});



module.exports = router;