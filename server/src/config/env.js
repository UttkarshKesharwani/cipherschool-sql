import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/ciphersql",
    JWT_SECRET: process.env.JWT_SECRET || "fallback_development_secret_key",
    DB_URL: process.env.DB_URL || "postgresql://postgres:postgres@localhost:5432/ciphersql",
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
};