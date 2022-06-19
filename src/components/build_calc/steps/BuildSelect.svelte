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
  let build: Build = builder.getBuild();

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

      if (builder.isValid(build)) {
        builder.setBuild(build);
        ViewUtils.hide(error);
      } else {
        ViewUtils.show(error);
      }

      // Updating view also.
      build = builder.getBuild();
    };
  }

  function addEngraving(key: string) {
    build.engravings[build.engravings.length] = {
      eKey: key,
      level: 0,
    };
  }
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-row mb-20">
    <Dropdown
      id="class_selector"
      text="Class:"
      options={getClassOptions()}
      bind:value={engravingSelectPkg.userClass}
    />
  </div>
  <div class="flex flex-row h-full flex-wrap">
    <div id="engravings" class="flex flex-col flex-wrap w-1/2 pr-1">
      <Engraving on:click={toggleSelect} size="w-full" />
      {#each build.engravings as e}
        <Engraving
          onLvlChange={updateLvl(e)}
          engraving={DAO.getEngraving(e.eKey)}
          level={e.level}
          size="w-full"
        />
      {/each}
    </div>
    <div class="desc-section">
      <h1 class="text-center">Select your engravings:</h1>
      <hr />
      <p>
        This tool will attempt to calculate the most cost efficient combination
        of accessories, books and stone required to obtain engravings selected
        here.
      </p>
      <p>
        Since API for price checking is not available in NA/EU, you will have to
        insert prices manually.
        <b>
          Complexity of the build will determine how many prices you have to
          insert on the later step.
        </b>
      </p>
      <hr />
      <p>Current points required: {build.reqPoints}</p>
      <div id="error_message" class="hidden text-red-600 text-center">
        <hr />
        <h1>ERROR:</h1>
        <p>Impossible build. Remove engraving or decrese level.</p>
      </div>
    </div>
  </div>
</div>

<Button text="Next" on:click />

<svelte:component
  this={engravingSelect}
  {...engravingSelectPkg}
  on:click={toggleSelect}
/>
