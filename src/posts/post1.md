---
slug: '/schemastitching'
date: '2019-01-12'
title: 'Schema Stitching with GraphQL'
---

Just found this is a really cool feature and allows you to even include remote schemas in your GraphQL server, or even combine multiple remote schema into you own server!!

---

https://www.apollographql.com/docs/graphql-tools/schema-stitching.html

Generally, to create a remote schema, you need three steps:

1. Create a [link](https://www.apollographql.com/docs/graphql-tools/remote-schemas.html#link) that can retrieve results from that schema
2. Use [`introspectSchema`](https://www.apollographql.com/docs/graphql-tools/remote-schemas.html#introspectSchema) to get the schema of the remote server
3. Use [`makeRemoteExecutableSchema`](https://www.apollographql.com/docs/graphql-tools/remote-schemas.html#makeRemoteExecutableSchema) to create a schema that uses the link to delegate requests to the underlying service

```js
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
// local schema
import { resolvers } from './resolvers';
const typeDefs = importSchema(path.join(__dirname, '/schema.graphql'));
// remote schema
const link = new HttpLink({ uri: 'http://api.githunt.com/graphql', fetch });

export default async () => {
  const schema = await introspectSchema(link);

  const remoteExecutableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  const localExecutableSchema = makeExecutableSchema({ typeDefs, resolvers });
  const finalSchema = mergeSchemas({
    schemas: [localExecutableSchema, remoteExecutableSchema],
  });
  const server = new GraphQLServer({
    schema: finalSchema,
    context: {},
  });
};
```

At the time of writing this post, you may encounter this error when stitching multiple schemas together and running a query against the server:

#### Error: Query root type must be provided

This is a known issue https://github.com/prisma/graphql-import/issues/73.

A workaround is to include a (dummy ) Query in each of the graphql schemas that you're stitching together.
