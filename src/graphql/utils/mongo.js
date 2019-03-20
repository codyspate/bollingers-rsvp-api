import mongoose from 'mongoose';
import dotenv from 'dotenv';

let connection;

dotenv.config();
mongoose.set('useCreateIndex', true);

const connect = async () => {
    try {
        if (connection && connection.readyState) return connection;
        const { DB } = process.env;
        await mongoose.connect(DB, { useNewUrlParser: true });
        const { connection: conn } = mongoose;
        connection = conn;
        return connection;
    } catch (e) {
        // console.log(e);
        throw e;
    }
};

export default {
    connect
};
