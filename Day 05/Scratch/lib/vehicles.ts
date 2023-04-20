import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDB() {
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

export async function getAllPersonId() {
  const db = await openDB();
  const people = await db.all('select * from person');

  return people.map(p => {
    return {
      params: {
        id: p.id.toString()
      }
    };
  });
}