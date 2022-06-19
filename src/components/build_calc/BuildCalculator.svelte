<script lang="ts">
  import StepTab from "./StepTab.svelte";
  import BuildCalculator from "../../code/BuildCalculator";
  import BuildSelect from "./steps/BuildSelect.svelte";
  import BookSelect from "./steps/BookSelect.svelte";
  import StoneSelect from "./steps/StoneSelect.svelte";
  import BuildPrices from "./steps/BuildPrices.svelte";
  import BuildResults from "./steps/BuildResults.svelte";

  let builder = new BuildCalculator();
  let step;
  let nextStep;

  function allowTransition() {
    if (step === BuildSelect) {
      return builder.isValid(builder.getBuild());
    }
    if (step === BookSelect) {
      return true;
    }
    if (step === StoneSelect) {
      return true;
    }
    if (step === BuildPrices) {
      return true;
    }

    return true;
  }

  function goToStep(toStep: string) {
    return () => {
      if (!allowTransition()) return;
      switch (toStep) {
        case "build":
          step = BuildSelect;
          nextStep = "book";
          break;
        case "book":
          step = BookSelect;
          nextStep = "stone";
          break;
        case "stone":
          step = StoneSelect;
          nextStep = "prices";
          break;
        case "prices":
          step = BuildPrices;
          nextStep = "results";
          break;
        case "results":
          step = BuildResults;
          nextStep = "none";
          break;
        default:
          break;
      }
    };
  }

  // Initialising the first step
  step = BuildSelect;
  nextStep = "book";
</script>

<div class="container mx-auto h-full flex flex-col">
  <div class="flex mx-auto flex-wrap mb-20">
    <StepTab
      selected={step == BuildSelect}
      name="Engravings"
      icon={"icon_ring"}
      on:click={goToStep("build")}
    />
    <StepTab
      selected={step == BookSelect}
      name="Books"
      icon={"icon_engraving_book"}
      on:click={goToStep("book")}
    />
    <StepTab
      selected={step == StoneSelect}
      name="Stone"
      icon={"icon_ability_stone"}
      on:click={goToStep("stone")}
    />
    <StepTab
      selected={step == BuildPrices}
      name="Prices" 
      icon={"icon_gold"} 
      on:click={goToStep("prices")} 
    />
  </div>
  <svelte:component this={step} {builder} on:click={goToStep(nextStep)} />
</div>
