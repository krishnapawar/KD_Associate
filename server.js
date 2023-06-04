import express from "express";
import mongoose from "mongoose";
import { PORT,DB_URL } from "./src/config";
import errorHandler from "./src/middlewires/errorHandler";
import cors from "cors";
const app = express();
import router from "./src/routes";
import path from "path";

app.use(cors());

//database connection
mongoose.connect(DB_URL,
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    });
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('DB connected.....');
});

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/api',router);
app.get('/',(req,res)=>{
    return res.status(200).json({
        massage:"API is working fine!"
    });
});

app.use(errorHandler);
app.listen(PORT || 3000,()=>console.log(`server runing http://127.0.0.1:${PORT}`));