<script lang="ts">
    export let name = "";
    export let selected = false;
    export let icon = undefined;
    export let icon_alt = "";
</script>

<div class="step-tab {selected ? 'step-tab-selected' : 'hover'}">
    <img class="w-5 h-5 mr-3" src={icon} alt={icon_alt} />
    {name}
</div>
