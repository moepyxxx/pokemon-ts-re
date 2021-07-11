import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENV,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
});

export default client;