import { Command } from "commander";
import fs from "fs";
import path from "path";
import { loadEnv } from "./parseEnv.js";
import { compareEnv } from "./compareEnv.js";
import { detectSecrets } from "./detectSecrets.js";
import { report } from "./reporter.js";
const program = new Command();
program
    .argument("<envFile>", "Path to .env file")
    .option("-e, --example <path>", "Path to .env.example (optional)")
    .option("--strict", "Fail on unused variables")
    .parse();
const [envFile] = program.args;
const options = program.opts();
if (!envFile) {
    console.error("❌ Please provide a .env file path");
    process.exit(1);
}
try {
    const env = loadEnv(envFile);
    let example = {};
    if (options.example) {
        const examplePath = path.resolve(process.cwd(), options.example);
        if (!fs.existsSync(examplePath)) {
            console.warn(`⚠️  ${options.example} not found, skipping example check`);
        }
        else {
            example = loadEnv(options.example);
        }
    }
    const comparison = compareEnv(env, example);
    const secrets = detectSecrets(env);
    report({
        ...comparison,
        secrets,
        strict: options.strict,
    });
}
catch (err) {
    console.error("❌", err.message);
    process.exit(1);
}
//# sourceMappingURL=cli.js.map