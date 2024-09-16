import { extendType, inputObjectType } from 'nexus';
import { User } from '../../../models/User';

const loginInput = inputObjectType({
  name: 'loginInput',
  definition: (t) => {
    t.nonNull.string('username');
    t.nonNull.string('password');
  },
});

export const login = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'Auth',
      args: { data: loginInput },
      resolve: async (_, args) => {
        const user = await User.findOne({ username: args.data.username });
        // TODO: generate jwt
        return { user, token: 'testing_login' };
      },
    });
  },
});
