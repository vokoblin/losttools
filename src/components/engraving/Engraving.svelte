<script lang="ts">
    import LevelDimond from "./LevelDimond.svelte";
    import EngravingFrame from "./EngravingFrame.svelte";

    export let engraving = undefined;
    export let level = 0;
    export let reduction = false;
    export let size = 'w-64'

    export let onClick = () => {};

    let isBuff = !reduction;

    function updateLevel(newLevel) {
        if (!engraving) return;
        return () => level = newLevel;
    }
</script>

<li on:click={onClick} class="flex flex-row {engraving ? '' : 'cursor-pointer'} {size}">
    <div class="relative w-16 h-16 cursor-pointer">
        <EngravingFrame {engraving} />
    </div>
    <div class="flex flex-col flex-grow">
        <div class="bg-gray-900 text-gray-400 p-1">
            {engraving ? engraving.name : "Select engraving..."}
        </div>
        <div class="flex-auto flex flex-row cursor-pointer">
            <LevelDimond onClick={updateLevel(1)} state={level > 0 ? isBuff : undefined} first />
            <LevelDimond onClick={updateLevel(2)} state={level > 1 ? isBuff : undefined} />
            <LevelDimond onClick={updateLevel(3)} state={level > 2 ? isBuff : undefined} last />
        </div>
    </div>
</li>
