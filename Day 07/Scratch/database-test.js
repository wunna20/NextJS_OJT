import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDB() {
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

async function getVehicle() {
  const db = await openDB();
  await db.migrate({ force: "last" });
}

getVehicle();
