<script lang="ts">
    import EngravingFrame from "./EngravingFrame.svelte";
    import DAO from "../../code/DAO";

    export let onSelect: (key: string) => void;
    export let engravings = DAO.getEngravings();
    export let userClass = undefined;
    export let size = "w-1/4 h-1/2";

    const classEngravings = engravings.filter(
        (e) => e.type === "class" && (!userClass || e.class === userClass)
    );
    const battleEngravings = engravings.filter(
        (e) => e.type === "battle"
    );
    const reductionEngravings = engravings.filter(
        (e) => e.type === "reduction"
    );

    function select(key: string) {
        return () => onSelect(key);
    }
</script>

<div class="popup-bg" on:click>
    <div class="engraving-select {size}">
        <h1 class="mb-3 w-full text-center">Class engravings:</h1>
        {#each classEngravings as engraving}
            <div
                class="relative w-16 h-16 cursor-pointer"
                on:click={select(engraving.key)}
            >
                <EngravingFrame {engraving} />
            </div>
        {/each}
        <h1 class="mt-10 mb-3 w-full text-center">Battle engravings:</h1>
        {#each battleEngravings as engraving}
            <div
                class="relative w-16 h-16 cursor-pointer"
                on:click={select(engraving.key)}
            >
                <EngravingFrame {engraving} />
            </div>
        {/each}
        <h1 class="mb-3 mt-10 w-full text-center">Negative engravings:</h1>
        {#each reductionEngravings as engraving}
            <div
                class="relative w-16 h-16 cursor-pointer"
                on:click={select(engraving.key)}
            >
                <EngravingFrame {engraving} />
            </div>
        {/each}
    </div>
</div>
