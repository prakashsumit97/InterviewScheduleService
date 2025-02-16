import mongoose, { ConnectOptions } from "mongoose";

class Database {
    private static instance: mongoose.Connection | null = null;
    private static uri: string;
    private static config: ConnectOptions = {

    };


    public static async getDbInstance(): Promise<mongoose.Connection> {
        if (!Database.instance) {
            Database.setConfig();
            const connection = await mongoose.connect(Database.uri, Database.config);
            Database.instance = connection.connection;
        }
        return Database.instance;
    }

    private static setConfig() {
        Database.uri = `mongodb://${process.env.MONGOHOST}/${process.env.MONGODB}`;
    }
}

export default Database;
