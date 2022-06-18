<script lang="ts">
    import LevelDimond from "./LevelDimond.svelte";
    import EngravingFrame from "./EngravingFrame.svelte";

    export let engraving = undefined;
    export let level = 0;
    export let reduction = false;
    export let size = 'w-64';
    export let onLvlChange = (lvl: number) => {};

    let isBuff = !reduction;

    function updateLevel(newLevel) {
        if (!engraving) return () => {};

        return () => {
            level = newLevel;
            onLvlChange(newLevel);
        }
    }
</script>

<li class="flex flex-row {engraving ? '' : 'cursor-pointer'} {size}" on:click>
    <div class="relative w-16 h-16 cursor-pointer">
        <EngravingFrame {engraving} />
    </div>
    <div class="flex flex-col flex-grow">
        <div class="bg-gray-900 text-gray-400 p-1">
            {engraving ? engraving.name : "Select engraving..."}
        </div>
        <div class="flex-auto flex flex-row cursor-pointer">
            <LevelDimond on:click={updateLevel(1)} state={level > 0 ? isBuff : undefined} first />
            <LevelDimond on:click={updateLevel(2)} state={level > 1 ? isBuff : undefined} />
            <LevelDimond on:click={updateLevel(3)} state={level > 2 ? isBuff : undefined} last />
        </div>
    </div>
</li>
