<script lang="ts">
    import Image from "../generic/Image.svelte";

    export let name = "";
    export let selected = false;
    export let icon = undefined;
    export let icon_alt = "";
</script>

<div class="step-tab {selected ? 'step-tab-selected' : 'hover'}">
    <Image path={icon} style={"w-5 h-5 mr-3"} alt={icon_alt} />
    {name}
</div>
