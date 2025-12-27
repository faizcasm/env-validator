const SECRET_PATTERNS = [
    /secret/i,
    /token/i,
    /password/i,
    /apikey/i,
];
export function detectSecrets(env) {
    return Object.entries(env)
        .filter(([key, value]) => SECRET_PATTERNS.some(r => r.test(key)) && value.length > 20)
        .map(([key]) => key);
}
//# sourceMappingURL=detectSecrets.js.map