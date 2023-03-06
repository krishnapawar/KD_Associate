import dotenv from "dotenv";

dotenv.config();
export const {
    PORT,
    DEBUG,
    DB_URL,
    JWT_SECRET
} = process.env;