<script lang="ts">
  import { onMount } from "svelte";
  import BuildCalc from "./build_calc/Content.svelte";

  let rootPath = "/losttools/";
  let path = rootPath;
  onMount(() => (path = window.location.pathname));
</script>

<section class="flex flex-col items-center bg-gray-700 ml-16 h-screen w-full overflow-hidden text-white">
  {#if path === rootPath + "build_calc"}
    <BuildCalc />
  {:else if path === rootPath}
    <h1>Hello, this page is still being made :P</h1>
  {:else}
    <h1>404: Page not found!</h1>
  {/if}
</section>
