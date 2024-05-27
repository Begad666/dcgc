<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import SidebarOverlay from "$lib/components/SidebarOverlay.svelte";
	import { enableFooter } from "$lib/config";
	import "./styles.css";

	let hidden = true;
	function setHidden(isHidden: boolean) {
		hidden = isHidden;
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
			<aside>
				<p>
					Contact me <a
						href="https://github.com/Begad666/begad.dev/discussions"
						class="link">here</a
					>
				</p>
			</aside>
		</footer>
	{/if}
</div>
