import mongoose from 'mongoose';

const connectDB = (url) =>
    mongoose.connect(url).then(() => console.log('Conectado a la base datos'));

export default connectDB;
