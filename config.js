const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('FROM', 'From Phone Number')
  .add('TO', 'To Phone Number')

imports
  .add('zeit')
  .add('twilio')

dependencies
  .add('messages', 'twilio:MessagesCollection')
  .add('deployment', 'zeit:Deployment')

schema.type('Root')
