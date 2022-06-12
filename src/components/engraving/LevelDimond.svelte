<script lang="ts">
    export let state = undefined;
    export let first = false;
    export let last = false;
    export let onClick = () => {};
</script>

<div on:click={onClick} class="engraving-lvl-bg {first ? '' : 'ml-px'} {last ? '' : 'mr-px'}">
    <div class="engraving-lvl {
            state === true
                ? 'engraving-lvl-up'
                : state === false
                ? 'engraving-lvl-down'
                : ''
        }"
    />
</div>
