<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import SidebarOverlay from "$lib/components/SidebarOverlay.svelte";
	import { enableFooter } from "$lib/config";
	import { browser } from "$app/environment";
	import "./styles.css";

	let hidden = true;
	function setHidden(isHidden: boolean) {
		hidden = isHidden;
	}

	$: {
		if (browser) {
			if (!hidden) {
				document.body.classList.add("noscroll");
			} else {
				document.body.classList.remove("noscroll");
			}
		}
	}
</script>

<div class="flex flex-col min-h-screen">
	<Header {setHidden} />

	<div class="flex flex-1 flex-row w-full mx-0 my-auto">
		<SidebarOverlay {hidden} {setHidden} />
		<Sidebar {hidden} {setHidden} />
		<main class="flex flex-col w-full flex-[5]">
			<slot />
		</main>
	</div>

	{#if enableFooter}
		<footer class="footer footer-center p-2 bg-primary text-primary-content">
			<nav class="grid grid-flow-col gap-4">
				<a class="link link-hover" href="https://begad.dev/contact">Contact</a>
				<!-- <a class="link link-hover" href="/disclaimer">Disclaimer</a> -->
			</nav>
		</footer>
	{/if}
</div>
