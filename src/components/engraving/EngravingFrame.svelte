<script lang="ts">
    export let engraving = undefined;

    function getIconPath() {
        if (!engraving) return;

        const classPrefix = engraving.class ? "_" + engraving.class : "";
        const iconName = engraving.type + classPrefix + "_" + engraving.key;
        const iconPath = `/losttools/src/assets/img/engravings/${iconName}.webp`;

        return iconPath;
    }
</script>

{#if engraving}
    <img
        class="absolute ml-1/5 mt-1/5 w-3/5 h-3/5"
        src={getIconPath()}
        alt=""
    />
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
