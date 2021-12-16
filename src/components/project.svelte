<script>
	export let title;
	export let date;
	let dateDisplay = new Date(Date.parse(date)).toLocaleDateString('en-UK', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>{title} - NoteCodeSpace</title>
</svelte:head>

<div class="prose dark:prose-dark">
	<div class="py-8 sm:py-10">
		<div class="leading-relaxed text-4xl mb-4 font-medium">{title}</div>
		<div class="text-sm">{dateDisplay}</div>
	</div>
	<slot />
</div>