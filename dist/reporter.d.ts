interface ReportInput {
    missing: string[];
    unused: string[];
    secrets: string[];
    strict: boolean;
}
export declare function report({ missing, unused, secrets, strict, }: ReportInput): void;
export {};
//# sourceMappingURL=reporter.d.ts.map