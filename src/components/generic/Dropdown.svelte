<script lang="ts">
  export let text = "";
  export let options = {};
  export let id = "selector";
  export let style = "w-full h-full";

  export let value = "";
</script>

<div class="flex items-center text-white {style}">
  <span class={text ? "mr-3" : ""}>{text}</span>
  <div class="relative w-full">
    <select {id} bind:value>
      {#each Object.keys(options) as key}
        <option value={key}>{options[key]}</option>
      {/each}
    </select>
    <span class="absolute right-0 top-0 h-full w-5 text-center text-gray-600 pointer-events-none flex items-center justify-center">
      <svg
        fill="#16a34a"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
        viewBox="0 -1 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  </div>
</div>
