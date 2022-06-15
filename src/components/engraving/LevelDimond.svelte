<script lang="ts">
    export let state = undefined;
    export let first = false;
    export let last = false;
</script>

<div class="engraving-lvl-bg {first ? '' : 'ml-px'} {last ? '' : 'mr-px'}" on:click>
    <div class="engraving-lvl {
            state === true
                ? 'engraving-lvl-up'
                : state === false
                ? 'engraving-lvl-down'
                : ''
        }"
    />
</div>
