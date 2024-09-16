import 'dotenv/config';

const LOCALHOST = 'mongodb://127.0.0.1:27017/console_log_db';

export const CONFIG = {
  PORT: 3001,
  MONGO_DB_URI: process.env.MONGO_DB_URI ?? LOCALHOST,
};
