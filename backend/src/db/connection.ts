import { connect } from 'mongoose';
import { disconnect } from 'process';

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('Connected to the database');
    } catch (error) {
        console.log(error);
        throw new Error('Cannot connect to the database');
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error('Cannot connect to the database');
    }
}

export { connectToDatabase, disconnectFromDatabase }