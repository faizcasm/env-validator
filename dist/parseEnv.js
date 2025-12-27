import fs from "fs";
import path from "path";
import dotenv from "dotenv";
export function loadEnv(filePath) {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(resolvedPath)) {
        throw new Error(`File not found: ${resolvedPath}`);
    }
    const content = fs.readFileSync(resolvedPath);
    return dotenv.parse(content);
}
//# sourceMappingURL=parseEnv.js.map