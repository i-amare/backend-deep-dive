import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);

export const rootDir = path.dirname(new URL(import.meta.url).pathname).slice(1);
