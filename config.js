const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('uid', 'A string with the unique deployment ID.')

imports
  .add('zeit')
  .add('twilio')

dependencies
  .add('message', 'twilio:Message')
  .add('deployments', 'zeit:DeploymentCollection')

schema.type('Root')
 .field('deployments', 'zeit:DeploymentCollection')