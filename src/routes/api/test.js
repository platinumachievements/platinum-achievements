export const get = async () => {
	const body = JSON.stringify({
		message: 'API is working!'
	});

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
