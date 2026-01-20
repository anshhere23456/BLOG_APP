import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ANSH:ANSH123@cluster0.wxi2tjs.mongodb.net/blog-app');
    console.log("DB Connected");
}