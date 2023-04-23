/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { secret } from '@/api/secret';

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, secret, async function(err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: 'Sorry you are not authenticated' });
  });
};

async function openDB() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
}

export default authenticated(async function getPeople(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();
  const people = await db.all('select * from person');

  res.json(people);
});