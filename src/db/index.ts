import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
export const db = drizzle(process.env.DB_FILE_NAME!);

console.log('db connection: ', db);