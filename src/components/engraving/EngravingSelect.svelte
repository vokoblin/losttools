<script lang="ts">
    import EngravingFrame from "./EngravingFrame.svelte";

    export let onSelect: (key: string) => void;
    export let onClose: () => {};
    export let engravings = [];
    export let userClass = undefined;

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
        return () => {
            onSelect(key);
            onClose();
        }
    }
</script>

<div class="engraving-select ">
    <h1 class="mb-3 w-full text-center">Class engravings:</h1>
    {#each classEngravings as engraving}
        <div class="relative w-16 h-16 cursor-pointer" on:click={select(engraving.key)}>
            <EngravingFrame {engraving} />
        </div>
    {/each}
    <h1 class="mt-10 mb-3 w-full text-center">Battle engravings:</h1>
    {#each battleEngravings as engraving}
        <div class="relative w-16 h-16 cursor-pointer" on:click={select(engraving.key)}>
            <EngravingFrame {engraving} />
        </div>
    {/each}
    <h1 class="mb-3 mt-10 w-full text-center">Negative engravings:</h1>
    {#each reductionEngravings as engraving}
        <div class="relative w-16 h-16 cursor-pointer" on:click={select(engraving.key)}>
            <EngravingFrame {engraving} />
        </div>
    {/each}
</div>
