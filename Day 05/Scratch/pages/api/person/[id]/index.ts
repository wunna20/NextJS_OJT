/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDB() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
}

export default async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();

  if (req.method === 'PUT') {
    const statement = await db.prepare(
      'UPDATE person SET name= ?, email = ? where id = ?'
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
    result;
  }

  const people = await db.all('select * from person where id = ?', [req.query.id]);

  res.json(people);
} 