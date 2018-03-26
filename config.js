const { schema, imports, dependencies, environment, expressions, endpoints } = program;

imports
  .add('zeit')
  .add('twilio')

dependencies
  .add('message', 'twilio:Message')
  .add('deployment', 'zeit:Deployment')

schema.type('Root')
