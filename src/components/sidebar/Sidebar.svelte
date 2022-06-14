<script lang="ts">
  import SidebarIcon from "./Button.svelte";
  import Image from "../generic/Image.svelte";
</script>

<div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
  <Image path={"icon_ring"} style={"sidebar-item w-10 h-10"} />
  <hr class="sidebar-hr" />
  <SidebarIcon content="build_calculator" tooltip="Accessory build cost calculator" icon={'icon_ring'} />
</div>
