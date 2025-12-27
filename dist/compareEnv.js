export function compareEnv(env, example) {
    const missing = [];
    const unused = [];
    for (const key of Object.keys(example)) {
        if (!(key in env))
            missing.push(key);
    }
    for (const key of Object.keys(env)) {
        if (!(key in example))
            unused.push(key);
    }
    return { missing, unused };
}
//# sourceMappingURL=compareEnv.js.map