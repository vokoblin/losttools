<script lang="ts">
  import TailwindCss from "./lib/TailwindCSS.svelte";
  import Sidebar from "./components/sidebar/Sidebar.svelte";
  import Content from "./components/MainContent.svelte";
</script>

<TailwindCss />

<div class="flex h-full w-full">
  <Sidebar />
  <Content />
</div>
