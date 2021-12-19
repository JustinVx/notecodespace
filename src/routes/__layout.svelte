<script>
	import '../app.postcss';
  import Emojis from '../components/random_emojis.svelte'
</script>

<div class="flex flex-col bg-teal-50 dark:bg-gray-800">
  <header>
    <div class="flex flex-row justify-between max-w-5xl mx-auto lg:mt-8 lg:mb-4">
      <h1 class="ml-6 mr-8 my-8 text-xl font-medium dark:text-gray-300"><a href="/" class="hover:text-teal-600">notecode.space</a></h1>
      <div class="mx-8 my-8"><Emojis /></div> 
    </div>
  </header>
  <main>
    <div class="mx-6 max-w-2xl md:mx-auto">
      <slot />
    </div>
  </main>
  <footer class="mb-32 mt-16"></footer>
</div>
