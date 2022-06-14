<script lang="ts">
    import Image from "../generic/Image.svelte";

    export let engraving = undefined;

    function getIconPath() {
        const classPrefix = engraving.class ? "_" + engraving.class : "";
        const iconName = engraving.type + classPrefix + "_" + engraving.key;

        return `engravings/${iconName}`;
    }
</script>

{#if engraving}
    <Image path={getIconPath()} style={"absolute ml-1/5 mt-1/5 w-3/5 h-3/5"} />
    <div class="absolute engraving-frame w-full h-full" />
{:else}
    <div class="engraving-frame w-full h-full">
        <svg
            stroke="gray"
            stroke-linecap="square"
            stroke-linejoin="miter"
            stroke-width="4"
            viewBox="-32 -32 64 64"
        >
            <path d="M0,-10 V10 M-10,0 H10" />
        </svg>
    </div>
{/if}
