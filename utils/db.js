import mysql from "mysql2/promise";
import 'dotenv/config';

const dbConfig={
    host:process.env.DB_HOST??"localhost",
    user:process.env.DB_USER??"root",
    password:process.env.DB_PWD??"",
    database:process.env.DB_NAME??"logingyak",
    port:Number(process.env.DB_PORT)??3307,
    datestrings:true
};

const pool = mysql.createPool(dbConfig);

export default pool;