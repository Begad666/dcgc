<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import SidebarOverlay from "$lib/components/SidebarOverlay.svelte";
	import Footer from "$lib/components/Footer.svelte";
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

	<Footer />
</div>
