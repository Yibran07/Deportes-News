import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://yibranperve:123@cluster0.7xkppaf.mongodb.net/?retryWrites=true&w=majority');
        console.log(">>> DB esta conectado");
    }catch(error){
        console.log(error);
    }
};

