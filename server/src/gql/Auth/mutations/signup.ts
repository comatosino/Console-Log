import { extendType, inputObjectType } from 'nexus';
import { User } from '../../../models/User';

const signupInput = inputObjectType({
  name: 'signupInput',
  definition: (t) => {
    t.nonNull.string('username');
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});

export const signup = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'Auth',
      args: { data: signupInput },
      resolve: async (_, args) => {
        const user = await User.create({ ...args.data });
        // TODO: generate jwt
        return { user, token: 'testing_signup' };
      },
    });
  },
});
