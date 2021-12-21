<script>
	import SignUp from "../components/signup_form.svelte"

	export let title;
	export let date;
	export let time;
	export let costs;
	let dateDisplay = new Date(Date.parse(date)).toLocaleDateString('en-UK', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>{title} - NoteCodeSpace</title>
</svelte:head>

<div class="prose dark:prose-dark lg:prose-lg xl:prose-xl">
	<div class="py-8 sm:py-10">
		<h1 class="leading-relaxed">{title}</h1>
		<div><b>Time spent: </b>{time} - <b>Costs: </b>{costs}</div>
	</div>
	<slot />
	<SignUp />
</div>