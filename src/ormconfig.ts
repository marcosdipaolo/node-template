import path from "path";
import { ConnectionOptions } from "typeorm";

export default [
  {
    "name": "development",
    "type": process.env.DB_DIALECT,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "entities": [path.join(__dirname, "/entities/**/*.{js,ts}")],
    "logging": true
  },
  {
    "name": "test",
    "type": process.env.DB_DIALECT,
    "database": process.env.DB_FILE,
    "entities": [path.join(__dirname, "/entities/**/*.{js,ts}")],
  },
  {
    // MOCKED PROD DATA, REPLACE WITH ACTUAL PRODUCTION ENV VALUES
    "name": "production",
    "type": "mysql",
    "host": "mysql",
    "port": 3306,
    "database": "nodetemplate",
    "username": "root",
    "password": "root",
    "entities": [path.join(__dirname, "/entities/**/*.{js,ts}")],
    "logging": true
  }
] as ConnectionOptions[];