import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import {compare} from 'bcrypt';

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
        res.json({message: "OK"});
      } else {
        res.json({message: "Incorrect Password"});
      }
    });
  } else {
    res.status(405).json({ message: 'We only support post method' });
  }

}
