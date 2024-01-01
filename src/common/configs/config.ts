import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Headless Billing System',
    description:
      'The Headless Billing System REST API revolutionizes billing processes for businesses. This API operates independently of a user interface, enabling easy integration with diverse platforms. It offers customizable solutions for billing cycles, invoicing, and payment processing, streamlining operations for enhanced efficiency and customer satisfaction.',
    version: '1.0',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
