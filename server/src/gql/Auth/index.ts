import { objectType } from 'nexus';

export * from './mutations';

export const Auth = objectType({
  name: 'Auth',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', {
      type: 'User',
    });
  },
});
