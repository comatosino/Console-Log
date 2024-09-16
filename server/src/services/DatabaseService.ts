import mongoose from 'mongoose';
import { CONFIG } from '../config';

type Mongoose = typeof mongoose;

export class DatabaseService {
  private static db: Mongoose = null;

  public static async connect() {
    if (this.db === null) {
      mongoose.set({ debug: true });
      this.db = await mongoose.connect(CONFIG.MONGO_DB_URI);
    }
  }
}
