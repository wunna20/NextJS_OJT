import openDB from "@/utils/db";

export async function getAllPeople() {
  const db = await openDB();
  const people = await db.all('select * from person');

  return people;
}