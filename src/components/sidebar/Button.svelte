<script lang="ts">
  export let content = ""
  export let tooltip = undefined
  export let icon = undefined
  export let icon_alt = ""
</script>

<a href={content} class="sidebar-item sidebar-icon hover group">
  <img class="w-9 h-9" src={icon} alt={icon_alt} />
  <span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</a>