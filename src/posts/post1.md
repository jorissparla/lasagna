---
slug: '/firstpost'
date: '2019-01-12'
title: 'Our first Post'
---

# Schema Stitching with GraphQL

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

const link = new HttpLink({ uri: 'http://api.githunt.com/graphql', fetch });

export default async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return executableSchema;
};
```
