import type { EnvMap } from "./parseEnv.js";


export function compareEnv(env: EnvMap, example: EnvMap) {
  const missing: string[] = [];
  const unused: string[] = [];

  for (const key of Object.keys(example)) {
    if (!(key in env)) missing.push(key);
  }

  for (const key of Object.keys(env)) {
    if (!(key in example)) unused.push(key);
  }

  return { missing, unused };
}
