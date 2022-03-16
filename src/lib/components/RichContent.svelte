<script>
	import { marked } from 'marked';
	export let richContent = '';
	const renderer = new marked.Renderer();
	$: pageContent = marked(richContent, { renderer });
</script>

<div>{@html pageContent}</div>
