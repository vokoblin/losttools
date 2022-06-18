<script lang="ts">
  import Dropdown from "../../generic/Dropdown.svelte";
  import Engraving from "../../engraving/Engraving.svelte";
  import EngravingSelect from "../../engraving/EngravingSelect.svelte";
  import DAO from "../../../code/DAO";
  import type BuildCalculator from "../../../code/BuildCalculator";
  import type { Build, BuildEng } from "../../../code/Types";
  import ViewUtils from "../../../code/ViewUtils";
  import Button from "../../generic/Button.svelte";

  export let builder: BuildCalculator;
  let selectedEngravings: Build = builder.getBuild();

  let engravingSelect = undefined;
  let engravingSelectPkg = {
    onSelect: addEngraving,
    userClass: DAO.getClasses()[0],
    engravings: DAO.getEngravings(),
  };

  function getClassOptions() {
    const options = {};

    DAO.getClasses().forEach((e) => {
      options[e] = e.charAt(0).toUpperCase() + e.slice(1);
    });

    return options;
  }

  function toggleSelect() {
    engravingSelect = engravingSelect ? undefined : EngravingSelect;
  }

  function updateLvl(eng: BuildEng) {
    return (lvl: number) => {
      eng.level = lvl;
      const error = document.getElementById("error_message");

      if (builder.isValid(selectedEngravings)) {
        builder.setBuild(selectedEngravings);
        ViewUtils.hide(error);
      } else {
        ViewUtils.show(error);
      }
    };
  }

  function addEngraving(key: string) {
    selectedEngravings[selectedEngravings.length] = {
      engraving: DAO.getEngraving(key),
      level: 0,
    };
  }
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-row mb-20">
    <Dropdown
      id="class_selector"
      text="Class"
      options={getClassOptions()}
      bind:value={engravingSelectPkg.userClass}
    />
  </div>
  <div class="flex flex-row h-full flex-wrap">
    <div id="engravings" class="flex flex-col flex-wrap w-1/2 pr-1">
      <Engraving on:click={toggleSelect} size="w-full" />
      {#each selectedEngravings as e}
        <Engraving
          onLvlChange={updateLvl(e)}
          engraving={e.engraving}
          level={e.level}
          size="w-full"
        />
      {/each}
    </div>
    <div class="flex flex-col h-full w-1/2 bg-gray-900 pl-1 items-center">
      <h1 id="error_message" class="hidden text-red-600 w-1/2 text-center mt-3">
        Impossible build. Remove engraving or decrese level.
      </h1>
    </div>
  </div>
</div>

<Button text="Next" on:click />

<svelte:component
  this={engravingSelect}
  {...engravingSelectPkg}
  on:click={toggleSelect}
/>
