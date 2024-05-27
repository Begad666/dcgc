<script lang="ts">
	import { replaceState } from "$app/navigation";
	import { page } from "$app/stores";

	export let name = "";
	export let href = "";

	let open = false;
	const onToggle = (isOpen: boolean) => {
		open = isOpen;
	};

	$: show = open || $page.url.pathname.startsWith(href);
</script>

<li>
	<!-- <details open={$page.state.sidebar?.[href] ?? false} on:toggle={onToggle}> -->
	<button
		on:click={() => onToggle(!show)}
		class="menu-dropdown-toggle"
		class:menu-dropdown-show={show}>{name}</button
	>
	<ul class="menu-dropdown" class:menu-dropdown-show={show}>
		<slot />
	</ul>
</li>
