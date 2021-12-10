"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.default = [
    {
        "name": "development",
        "type": process.env.DB_DIALECT,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "database": process.env.DB_NAME,
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "entities": [path_1.default.join(__dirname, "/entities/**/*.{js,ts}")],
        "logging": true
    },
    {
        "name": "test",
        "type": process.env.DB_DIALECT,
        "database": process.env.DB_FILE,
        "entities": ["dist/entities/*.js"],
    }
];
