<script lang="ts">
  export let text = "";
  export let options = {};
  export let id = 'selector';
</script>

<div class="flex items-center w-full h-full">
  <span class="mr-3">{text}:</span>
  <div class="relative w-full">
    <select id={id}>
      {#each Object.keys(options) as key}
        <option id={key}>{options[key]}</option>
      {/each}
    </select>
    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
      <svg
        fill="none"
        stroke="#16a34a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  </div>
</div>
