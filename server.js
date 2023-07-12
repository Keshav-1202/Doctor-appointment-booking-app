const express=require('express');
const app=express();
const port=5000;
require('dotenv').config()
app.use(express.json());
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute');
const doctorRoute=require('./routes/doctorsRoute');
const connectDB=require('./config/dbConfig');
app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);
const start=async()=>
{
    try{
        await connectDB(process.env.MONGO_URL).then(console.log('connected'))
        app.listen(port,console.log(`server is listening on ${port}...`))
    }
    catch(error)
    {
        console.log(error)
    }
}
start()

