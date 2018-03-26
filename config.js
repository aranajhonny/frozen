const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('FROM', 'From Phone Number')
  .add('TO', 'To Phone Number')

imports
  .add('zeit')
  .add('twilio')

dependencies
  .add('message', 'twilio:Message')
  .add('deployment', 'zeit:Deployment')

schema.type('Root')
