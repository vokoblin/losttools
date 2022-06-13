<script lang="ts">
  import type { Page } from "../code/Types";
  import Router from "../code/Router";

  let content: Page;

  function changeContent() {
    content = Router.activePage;
  }

  Router.subscribe(changeContent);
  Router.goTo("landing");
</script>

<section class="flex flex-col items-center bg-gray-700 ml-16 h-screen w-full overflow-hidden text-white">
  <svelte:component this={content.comp} context={content.cont} />
</section>
