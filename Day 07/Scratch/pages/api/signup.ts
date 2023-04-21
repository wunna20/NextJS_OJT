import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import {hash} from 'bcrypt';

async function openDB() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
}

export default async function signUp(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();

  if (req.method === 'POST') {

    hash(req.body.password, 10, async function(err, hash) {
      // Store hash in your password DB.
      const user = req.body;
      const statement = await db.prepare(
        'INSERT INTO Person (name, email, age, gender, password) values (?, ?, ?, ?, ?)'
      );

      const result = await statement.run(
        user.name,
        user.email,
        user.age,
        user.gender,
        hash
      );
      result;
      const people = await db.all('select * from person');
      res.json(people);
    });
  } else {
    res.status(405).json({ message: 'We only support post method' });
  }

}
