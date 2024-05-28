<script lang="ts">
	export let hidden = true;
	export let setHidden = (isHidden: boolean) => {};
</script>

<button
	aria-label="close drawer"
	class="sm:hidden absolute bg-black bg-opacity-50 w-full h-full top-0 left-0 opacity-0 transition-opacity z-10"
	class:pointer-events-none={hidden}
	class:opacity-100={!hidden}
	on:click={() => setHidden(true)}
></button>
