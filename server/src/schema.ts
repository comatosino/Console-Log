import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { makeSchema } from 'nexus';

import * as types from './gql';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(__dirname, '../schema.gql'),
    typegen: join(__dirname, '@types/schema.ts'),
  },
});
