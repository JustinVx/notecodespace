<script context="module">
	export const prerender = true;
	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };    
	}
</script>

<script>
  export let posts;
  $: console.log(posts)
</script>

<div class="prose dark:prose-dark">
  <div>
    <h2 class="font-medium">A wonderfull list of projects</h2>
    <ol>
      {#each posts as i}
        <li><a href="/{i.slug}">{i.title}</a>
        </li>
      {/each}
    </ol>
  </div>
</div>

