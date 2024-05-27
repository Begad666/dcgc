<script lang="ts">
	import SidebarGroup from "./SidebarGroup.svelte";
	import SidebarItem from "./SidebarItem.svelte";
	import data from "../data.json";

	export let hidden = true;
	export let setHidden = (isHidden: boolean) => {};

	const hideSidebar = () => {
		setHidden(true);
	};
</script>

<div
	class="z-10 will-change-transform transition-transform sm:transition-none sm:transform-none h-screen top-0 absolute sm:h-auto sm:relative sm:flex-[2] sm:flex min-w-48 max-w-80"
	class:translate-x-full={hidden}
>
	<div class="menu h-full w-64 sm:w-full flex flex-col p-4 bg-base-300 dark:bg-base-200">
		<SidebarGroup name="الجامعات" href="/university">
			{#each data.universities as university}
				<SidebarItem
					name={university.name}
					href="/university/{university.id}"
					{hideSidebar}
				/>
			{/each}
		</SidebarGroup>
		<SidebarGroup name="المعاهد" href="/institute"></SidebarGroup>
		<SidebarGroup name="منصات البحث عن عمل" href="/job-search-platform"></SidebarGroup>
	</div>
</div>
