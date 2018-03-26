const { root, deployment, message } = program.refs

export async function init() {
	return program.setTimer('check', 0, 50)
}

export async function timer({ key }) {
	const state = await deployment.query('{ state }')
	console.log(state)
}
