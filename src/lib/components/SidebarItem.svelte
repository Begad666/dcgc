<script lang="ts">
	import { page } from "$app/stores";

	export let href = "";
	export let name = "";
	export let hideSidebar = () => {};

	$: active = $page.url.pathname.startsWith(href);
</script>

<li aria-current={active ? "page" : undefined}>
	<a
		{href}
		on:click={() => hideSidebar()}
		class="bg-opacity-50"
		class:bg-base-100={active}
		class:dark:bg-base-300={active}>{name}</a
	>
</li>
