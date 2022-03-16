<script context="module">
	export async function load({ fetch }) {
		const [{ blogs }] = await Promise.all([fetch('/data.json').then((r) => r.json())]);
		return {
			props: {
				blogs
			}
		};
	}
</script>

<script>
	import { base } from '$app/paths';
	export let blogs;
</script>

<div class="row">
	{#each blogs.items as blog}
        <div class="column">
        <a href={`${base}/${blog.fields.slugField}`}>
            {blog.fields.title}
        </a>
        <p>{blog.fields.datePublished}</p>
        </div>
    {/each}

</div>

<style>
</style>
