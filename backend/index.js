const port = 4000;
import express from "express"
const app =express();
import mongoose from "mongoose";
import Jwt  from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
app.use(express.json());
app.use(cors());
const URL ="mongodb+srv://dineshkumar:moorthy1834@cluster0.aohezky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//database connection
mongoose.connect(URL,{})
.then(() => {
    console.log('Connected to MongoDB Atlas');
  })
.catch((error) => {
console.error('Error connecting to MongoDB Atlas:', error);
});

app.get("/", (req, res)=>{
    res.send("express is running")
})

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
        // return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload = multer({storage:storage})
app.use("/images", express.static('upload/images'))
//crate upload endpoint 
app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
        sucess:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id:{
        type:Number,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    image:{
        type:String,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: String,
        required: true,
    },
    old_price:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

app.post("/addproduct", async(req, res)=>{
    const products = await Product.find({});
    let id;
    if(products.length>0){
        let lastproduct_array= products.slice(-1);
        let lastproduct= lastproduct_array[0];
        id= lastproduct.id+1;
    }
    else{
        id=1;

    }
    const product= new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        sucess:true,
        name: req.body.name,
    })
})


app.post("/removeproduct", async(req,res)=>{
    const products=await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name

    });
})
app.get("/allproducts",async(req,res)=>{
    let products= await Product.find({});
    res.send(products);
})
app.listen(port, (error)=>{
    if(!error){
    console.log("server is running on port"+ port)}
    else {
        console.log("error:"+ error)
    }
})