const { root, deployments, message } = program.refs
const { uid } = process.env

export async function init() {
  return program.setTimer('check', 0, 10)
}

export async function timer({ key }) {
  const state = await deployments.one({ uid: uid }).query('{ state }')
  console.log(state)
}
