import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    // Log a masked version of the connection string (without password)
    const maskedURI = process.env.MONGO_URI?.replace(
      /mongodb\+srv:\/\/([^:]+):([^@]+)@/, 
      'mongodb+srv://username:password@'
    );
    console.log('Connection string:', maskedURI);
    
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    
    console.log('✅ Connection test successful!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Check your MongoDB Atlas connection string in .env file');
    console.log('2. Make sure your IP is whitelisted in MongoDB Atlas');
    console.log('3. Verify your database user password is correct');
    console.log('4. Ensure your cluster is not paused');
    process.exit(1);
  }
}

testConnection();