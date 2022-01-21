import { createHash } from 'crypto';
import dbClient from '../utils/db';

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;
    const users = await dbClient.database.collection('users');

    if (!email) return res.status(400).send({ error: 'Missing email' });
    if (!password) return res.status(400).send({ error: 'Missing password' });

    const existingUser = await users.findOne({ email });
    if (existingUser) return res.status(400).send({ error: 'Already exist' });

    const hashedPwd = createHash('sha1').update(password).digest('hex');
    const newUserData = { email, password: hashedPwd };
    const result = await users.insertOne(newUserData);

    return res.status(201).send({ id: result.insertedId, email });
  }
}

export default UsersController;
// import dbClient from '../utils/db';
// import { createHash } from 'crypto';

// class UsersController {
//   static async postNew(req, res) {
//     const { email, password } = req.body;

//     if (!email) return res.status(400).send({ error: 'Missing email' });
//     if (!password) return res.status(400).send({ error: 'Missing password' });

//     const users = await dbClient.db.collection('users');

//     if (await users.findOne({ email })) return res.status(400).send({ error: 'Already exist' });

//     const hash = createHash('sha1').update(password);
//     const user = await users.insertOne({ email, password: hash.digest('hex') });

//     return res.status(201).send({ id: user.insertedId, email });
//   }
// }

// module.exports = UsersController;
