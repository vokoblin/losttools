<script lang="ts">
    import Dropdown from "../../generic/Dropdown.svelte";
    import type BuildCalculator from "../../../code/BuildCalculator";
    import EngravingFrame from "../../engraving/EngravingFrame.svelte";
    import Button from "../../generic/Button.svelte";
    import DAO from "../../../code/DAO";

    export let builder: BuildCalculator;

    builder.createBooksFromBuild();

    const options = {
        "0": "Not learned",
        "3": "Learned green (+3)",
        "6": "Learned blue (+6)",
        "9": "Learned purple (+9)",
        "12": "Learned yellow (+12)",
    };
</script>

<div class="flex flex-col h-full">
    <div class="flex flex-row h-full flex-wrap">
        <div class="flex flex-col flex-wrap w-1/2 pr-1">
            {#each builder.getBooks() as b}
                <div class="flex flex-row flex-wrap pb-1">
                    <div class="relative w-16 h-16">
                        <EngravingFrame engraving={DAO.getEngraving(b.eKey)} />
                    </div>
                    <div class="flex flex-col flex-grow">
                        <div class="bg-gray-900 text-gray-400 p-1 text-center">
                            {DAO.getEngraving(b.eKey).name}
                        </div>
                        <Dropdown bind:value={b.points} {options} />
                    </div>
                </div>
            {/each}
        </div>
        <div class="desc-section">
            <h1 class="text-center">Some description:</h1>
            <p>Description of this page ................................</p>
        </div>
    </div>
</div>
<Button text="Next" on:click />
