const { root, deployment, messages } = program.refs
const { FROM, TO } = process.env

export async function init() {
	return program.setTimer('check', 0, 50)
}

export async function timer({ key }) {
	const { state, host } = await deployment.query('{ state host }')
	if (state === 'FROZEN') {
		console.log()
		await messages.sendSms({
			from: FROM,
			to: TO,
			body: `The deployment ${host} has passed in a ${state} state.`,
		})
	}
}
