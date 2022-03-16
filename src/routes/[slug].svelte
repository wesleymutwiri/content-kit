<script context="module">
	export async function load({ fetch, params }) {
		const url = `/${params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			const { blog } = await res.json();

			return {
				props: {
					blog: blog.items[0]
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import RichContent from '$lib/components/RichContent.svelte';

	export let blog;
</script>

<div class="container application-form">
	<div class="row">
		<div class="col-lg-12">
			<h1>Course: {blog.fields.title}</h1>
			<p>Date From: {blog.fields.datePublished}</p>

			<RichContent richContent={blog.fields.content} />
		</div>
	</div>
</div>

<style>
</style>
