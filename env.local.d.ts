declare namespace NodeJS {
  interface ProcessEnv {
    SALT: string;
    JWT_SECRET: string;
  }
}