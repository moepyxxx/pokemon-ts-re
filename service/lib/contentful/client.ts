import * as contentful from 'contentful'

const client = contentful.createClient({
  space: '4kibrjoki4td',
  environment: 'master',
  accessToken: 'GyHYFhPpLJWDSASLqMLDslOPmJ-cR4G5XQTT6ac8VRA'
});

export default client;