import { extendType } from 'nexus';
import { User } from '../../../models/User';

export const getUser = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getUser', {
      type: 'User',
      resolve: async (_root, _args, ctx) => {
        const user = await User.findById(ctx.id);
        return user;
      },
    });
  },
});
