import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { ingredientsTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof ingredientsTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  await db.insert(ingredientsTable).values(user);
  console.log('New user created!')
  const users = await db.select().from(ingredientsTable);
  console.log('Getting all users from the database: ', users)

  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
 
  await db
    .update(ingredientsTable)
    .set({
      age: 31,
    })
    .where(eq(ingredientsTable.email, user.email));
  console.log('User info updated!')
  await db.delete(ingredientsTable).where(eq(ingredientsTable.email, ingredientsTable.email));
  console.log('User deleted!')
}

main();