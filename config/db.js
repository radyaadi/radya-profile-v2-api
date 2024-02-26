import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI)
    return console.log('Database URL was not found!');

  if (isConnected) return console.log('Already connected to the Database!');

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('Connected to the Database!');
  } catch (error) {
    console.log(error);
  }
};
