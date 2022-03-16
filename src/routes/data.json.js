import { client } from '$lib/contentfulClient';

export async function get() {
	// get all blogs from Contentful
	const blogs = await client.getEntries({
		content_type: 'blog'
	});

	if (blogs) {
		return {
			status: 200,
			body: {
				blogs
			}
		};
	}

	return {
		status: 404
	};
}
