import chalk from "chalk";

interface ReportInput {
  missing: string[];
  unused: string[];
  secrets: string[];
  strict: boolean;
}

export function report({
  missing,
  unused,
  secrets,
  strict,
}: ReportInput) {
  let failed = false;

  if (missing.length) {
    failed = true;
    console.log(chalk.red("\n✖ Missing variables:"));
    missing.forEach(v => console.log("  -", v));
  }

  if (unused.length) {
    console.log(chalk.yellow("\n⚠ Unused variables:"));
    unused.forEach(v => console.log("  -", v));
    if (strict) failed = true;
  }

  if (secrets.length) {
    console.log(chalk.magenta("\n🔐 Possible hardcoded secrets:"));
    secrets.forEach(v => console.log("  -", v));
  }

  if (failed) {
    process.exit(1);
  }

  console.log(chalk.green("\n✔ Environment check passed"));
}
