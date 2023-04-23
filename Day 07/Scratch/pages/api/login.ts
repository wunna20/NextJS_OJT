import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { secret } from '@/api/secret';

async function openDB() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
}

export default async function signUp(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();

  if (req.method === 'POST') {
    const person = await db.get('select * from person where email = ?', [req.body.email]);

    compare(req.body.password, person.password, function(err, result) {
      // result == true
      if (!err && result) {
        const claims = { id: person.id, email: person.email };
        const jwt = sign(claims, secret);
        //res.json({message: "OK"});
        res.json({ authToken: jwt });
      } else {
        res.json({message: "Incorrect Password"});
      }
    });
  } else {
    res.status(405).json({ message: 'We only support post method' });
  }

}
