import { Pool } from 'pg';

let connection: any;

if (!connection) {
  connection = new Pool({
    user: 'nico',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'db-nextjs'
  });
}

export { connection };