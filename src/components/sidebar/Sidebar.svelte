<script lang="ts">
  import SidebarIcon from "./Button.svelte";
  import Image from "../generic/Image.svelte";
  import Router from "../../code/Router";
  import Dropdown from "../generic/Dropdown.svelte";
  import DAO from "../../code/DAO.js";

  function changePage(page: string) {
    return () => Router.goTo(page);
  }
</script>

<div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
  <Image path={"icon_ring"} style={"sidebar-item w-10 h-10"} />
  <hr class="sidebar-hr" />
  <Dropdown options={DAO.getRegions()} bind:value={DAO.global.region} class="" />
  <hr class="sidebar-hr" />
  <SidebarIcon on:click={changePage("build_calculator")} tooltip="Accessory build cost calculator" icon={'icon_ring'} />
</div>
