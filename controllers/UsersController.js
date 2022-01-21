import dbClient from '../utils/db';
import sha1 from 'sha1';

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) return res.status(400).send({ error: 'Missing email' });
    if (!password) return res.status(400).send({ error: 'Missing password' });

    if (await dbClient.users.findOne({ email })) return res.status(400).send({ error: 'Already exist' });

    let user;
    try {
      user = await dbClient.users.insertOne({ email, password: sha1(password) });
    } catch (err) {
      return res.status(400).send({ error: `DB insert failed: ${err}` });
    }

    return res.status(201).send({ id: user.insertedId, email });
  }
}

module.exports = UsersController;
