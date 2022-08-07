import {Pool} from 'pg';

new Pool({
  user:'postgres',
  password:'postgres',
  host:'localhost',
  port:5432,
  database: ''
})