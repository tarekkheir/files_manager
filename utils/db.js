import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    MongoClient.connect(`mongodb://${host}:${port}/${database}`, { useUnifiedTopology: true })
      .then((client) => { this.db = client.db(database); });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments({});
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments({});
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
