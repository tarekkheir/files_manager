import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

class AppController {
  static getStatus(req, res) {
    return res.status(200).send({
      'redis': RedisClient.isAlive(),
      'db': DBClient.isAlive()
    });
  }

  static async getStats(req, res) {
    return res.status(200).send({
      'users': await DBClient.nbUsers(),
      'files': await DBClient.nbFiles()
    });
  }
}

module.exports = AppController;
