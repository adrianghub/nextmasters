export async function GET(request: Request): Promise<Response> {
	console.log(request);

	return new Response(JSON.stringify({ message: "Hello world" }), {
		headers: { "content-type": "application/json" },
	});
}
