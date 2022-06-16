import { createClient } from 'urql';

const url: string =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:8080/v1/graphql';

export const client = createClient({ url });
