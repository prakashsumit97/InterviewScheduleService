import { IMongoStore } from "./IMongoStore";
import { MongoStore } from "./MongoStore";

interface MongoStoreFactory {
    new(): IMongoStore;
}

const GetMongoDataStore = (ctor: MongoStoreFactory): IMongoStore => {
    return new ctor();
};

export const mongoStore = GetMongoDataStore(MongoStore);