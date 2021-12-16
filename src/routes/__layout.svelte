<script>
	import '../app.postcss';
</script>

<div class="h-screen flex flex-col bg-teal-50 dark:bg-gray-800">
  <header>
    <div class="max-w-2xl mx-auto">
      <h1 class="py-8 font-medium dark:text-gray-300"><a href="/" class="hover:text-teal-600">NoteCodeSpace</a></h1>
    </div>
  </header>
  <main>
    <div class="max-w-2xl mx-auto">
      <slot />
    </div>
  </main>
</div>
