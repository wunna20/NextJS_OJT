import openDB from "@/utils/db";

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

export async function getVehicleByPerson(id: number) {
  const db = await openDB();
  const vehicles = await db.all('select * from vehicle where ownerId = ?', id);

  return vehicles;
}