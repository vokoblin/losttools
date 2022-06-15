<script lang="ts">
  import Image from "../generic/Image.svelte";

  export let tooltip = undefined;
  export let icon = undefined;
  export let icon_alt = "";
</script>

<div class="sidebar-item sidebar-icon hover group" on:click>
  <Image path={icon} style={"w-9 h-9"} alt={icon_alt} />
  <span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</div>
