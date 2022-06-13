<script lang="ts">
  import SidebarIcon from "./Button.svelte";
  import icon from "../../assets/img/ring_icon.webp";
</script>

<div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
  <img class="sidebar-item w-10 h-10" src={icon} alt="" />
  <hr class="sidebar-hr" />
  <SidebarIcon content="build_calculator" tooltip="Accessory build cost calculator" {icon} />
</div>
