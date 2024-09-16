import http from 'http';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import { CONFIG } from './config';
import { schema } from './schema';
import { context } from './middleware/context';
import { DatabaseService } from './services/DatabaseService';
import type { AppContext } from './@types/common';

(async function main() {
  const app = express();
  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer<AppContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await DatabaseService.connect();
  await apolloServer.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(apolloServer, { context }));

  httpServer.listen({ port: CONFIG.PORT }, () => {
    console.log(`Server listening at http://localhost:${CONFIG.PORT}`);
    console.log(`Apollo Sandbox ready at http://localhost:${CONFIG.PORT}/graphql`);
  });
})();
