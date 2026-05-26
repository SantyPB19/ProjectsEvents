import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

dotenv.config(); // 🔥 ESTO ES LO QUE FALTA

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});