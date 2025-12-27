import type { EnvMap } from "./parseEnv.js";


const SECRET_PATTERNS = [
  /secret/i,
  /token/i,
  /password/i,
  /apikey/i,
];

export function detectSecrets(env: EnvMap): string[] {
  return Object.entries(env)
    .filter(([key, value]) =>
      SECRET_PATTERNS.some(r => r.test(key)) && value.length > 20
    )
    .map(([key]) => key);
}
