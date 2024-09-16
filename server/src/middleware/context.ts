import type { BaseContext, ContextFunction } from '@apollo/server';
import type { ExpressContextFunctionArgument } from '@apollo/server/dist/esm/express4';

type AppContextFn = ContextFunction<[ExpressContextFunctionArgument], BaseContext>;

export const context: AppContextFn = async ({ req }) => {
  return req;
};
