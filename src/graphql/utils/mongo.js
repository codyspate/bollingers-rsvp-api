import mongoose from 'mongoose';

let connection;

const connect = async () => {
    try {
        if (connection && connection.readyState) return connection;
        const { DB } = process.env;
        await mongoose.connect(DB);
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
