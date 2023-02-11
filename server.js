import express from "express";
import mongoose from "mongoose";
import { PORT,DB_URL } from "./config";
import errorHandler from "./middlewires/errorHandler";
const app = express();
import router from "./routes";

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


app.use(express.json());

app.use('/api',router);
app.get('/',(req,res)=>{
    return res.status(200).json({
        massage:"API is working fine!"
    });
});

app.use(errorHandler);
app.listen(PORT || 3000,()=>console.log(`server runing http://127.0.0.1:${PORT}`));