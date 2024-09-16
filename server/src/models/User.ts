import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

import { NexusGenObjects as Type } from '../@types/schema';

const SALT_ROUNDS = 10;

const userSchema = new Schema<Type['User']>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, SALT_ROUNDS);
  }
  next();
});

export const User = model<Type['User']>('User', userSchema);
