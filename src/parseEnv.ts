import fs from "fs";
import path from "path";
import dotenv from "dotenv";

export type EnvMap = Record<string, string>;

export function loadEnv(filePath: string): EnvMap {
  const resolvedPath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  const content = fs.readFileSync(resolvedPath);
  return dotenv.parse(content);
}
