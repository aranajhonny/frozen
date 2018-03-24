const { schema, imports, dependencies, environment, expressions, endpoints } = program;

program.name = "frozen"

environment
  .add('uid', 'A string with the unique deployment ID.')

imports
  .add('zeit')
  .add('twilio')

dependencies
  .add('message', 'twilio:Message')
  .add('deployments', 'DeploymentsCollection')

schema.type('Root')
