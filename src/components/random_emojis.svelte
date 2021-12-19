<script>
  let emojis = ['☂️','🤯','🩴','⛑','🐯','🦑','🦜','☄️','🔥','🥐','🍿','🍾','🌰','⚽️','🧘‍♂️','🥁','🛺','🚞','🛤','🏕','⛰','🧯','🧲','🔭','🚰','🪅','🇦🇶','🍇','🥒','🦭','🐡','🥽','🦸‍♂️','🧔‍♂️','👍','🧠','🙀','😮‍💨','🤤','😬','🥺','😜','🙂','🔆','❤️‍🔥','🔍','🪄']
  let random = Math.floor(Math.random() * emojis.length);
  let emoji1 = emojis[random]
  let emoji2 = emojis[Math.floor(Math.random() * emojis.length)]
  let emoji3 = emojis[Math.floor(Math.random() * emojis.length)]

  function changeEmojis() {
    emoji1 = emojis[Math.floor(Math.random() * emojis.length)]
    emoji2 = emojis[Math.floor(Math.random() * emojis.length)]
    emoji3 = emojis[Math.floor(Math.random() * emojis.length)]
  }
</script>

<button on:click={changeEmojis}>
  {@html emoji1} {@html emoji2} {@html emoji3}
</button>

