<script context="module">
	export const prerender = true;
	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };    
	}
</script>

<script>
  export let posts;

  const formatDate = (value) => {
		const date = new Date(value);
		return new Intl.DateTimeFormat('en-UK', {
			year: 'numeric',
			month: 'long',
			day: undefined
		}).format(date);
	};
</script>

<div class="prose dark:prose-dark lg:prose-lg xl:prose-xl h-screen">
  <div>
    <p class="font-medium">Welcome to <b class="text-black dark:text-white">notecode.page</b>. It's this website where I keep updates on the small side-projects that I work on and that I have worked on. </p>
		<p>Here they are:</p>
    <div>
      {#each posts as i}
        <div><a href="/{i.slug}">{i.title}</a></div>
        <div class="text-sm text-gray-400">Built in {formatDate(i.date)}. Spent {i.time} and {i.costs} on it.</div>
      {/each}
      </div>
  </div>
</div>




