import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async (RequestEvent) => {
	const { fetch } = RequestEvent;

	try {
		const response = await fetch("");
		const data = await response.json();
	
		return data;
	} catch(e) {
		throw error(404, (e as Error).message);
	}

}) satisfies RequestHandler;

export const POST = (async (RequestEvent) => {
	// const { request } = RequestEvent;
	// const { text } = await request.json();

	const newComment = null;

	// const newComment = {
	// 	id: comments.length + 1,
	// 	text
	// };
	// comments.push(newComment);

	return json(newComment, { status: 201 });
}) satisfies RequestHandler;