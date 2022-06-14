<script lang="ts">
	import LoadingImg from "../../assets/img/default_loading.gif";

	export let path = '';
	export let ext = 'webp';
	export let style = 'w-full h-full';
	export let alt = '';

	function displayError(e) {
		console.log(e);
		return undefined;
	}
</script>

{#await import(`../../assets/img/${path}.${ext}`)}
	<img class={style} src={LoadingImg} alt={alt} />
{:then img}
	<img class={style} src={img.default} alt={alt} />
{:catch error}
	<img class={style} src={displayError(error)} alt={alt} />
{/await}
