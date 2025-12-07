interface ProcessEnv {
  NODE_ENV: "development" | "production" | "test";
}

interface Process {
  env: ProcessEnv;
}

declare var process: Process;
