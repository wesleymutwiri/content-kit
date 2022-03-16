import { client } from '$lib/contentfulClient';

export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const blog = await client.getEntries({
		'fields.slugField': params.slug,
		content_type: 'blog'
	});

	if (blog) {
		return {
			body: {
				blog
			}
		};
	}

	return {
		status: 404
	};
}
