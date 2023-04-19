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

export default async function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();
  const vehicles = await db.all('select * from vehicle where ownerId = ?',[req.query.id]);

  res.json(vehicles);
} 