<script lang="ts">
  import Router from "../../code/Router";
  import Image from "../generic/Image.svelte";

  export let content = "";
  export let tooltip = undefined;
  export let icon = undefined;
  export let icon_alt = "";

  function changeContent() {
    Router.goTo(content);
  }
</script>

<div on:click={changeContent} class="sidebar-item sidebar-icon hover group">
  <Image path={icon} style={"w-9 h-9"} alt={icon_alt} />
  <span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</div>
