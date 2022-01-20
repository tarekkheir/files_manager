import dbClient from '../utils/db';

const crypto = require('crypto');

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) return res.status(400).send({ error: 'Missing email' });
    if (!password) return res.status(400).send({ error: 'Missing password' });

    const users = await dbClient.db.collection('users');

    if (await users.findOne({ email })) return res.status(400).send({ error: 'Already exist' });

    const hash = crypto.createHash('sha1').update(password);

    const user = await users.insertOne({ email, password: hash.digest('hex') });

    return res.status(201).send({ id: user.insertedId, email });
  }
}

module.exports = UsersController;
