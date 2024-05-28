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
	class="z-10 will-change-transform transition-transform sm:transition-none sm:transform-none h-screen top-0 fixed sm:h-auto sm:relative sm:flex-[2] sm:flex min-w-48 max-w-80 bg-base-300 sm:bg-transparent"
	class:translate-x-full={hidden}
>
	<div class="menu w-64 sm:w-full flex flex-col p-4 overflow-y-auto">
		<SidebarGroup name="الجامعات" href="/university">
			{#each data.universities as university}
				<SidebarItem
					name={university.name}
					href="/university/{university.id}"
					{hideSidebar}
				/>
			{/each}
		</SidebarGroup>
		<SidebarGroup name="منصات البحث عن عمل" href="/job-search-platform">
			{#each data.jobSearchPlatforms as jobSearchPlatform}
				<SidebarItem
					name={jobSearchPlatform.name}
					href="/job-search-platform/{jobSearchPlatform.id}"
					{hideSidebar}
				/>
			{/each}
		</SidebarGroup>
		<SidebarGroup name="منصات دعم الخريجين" href="/graduates-support-platform">
			{#each data.graduatesSupportPlatforms as graduatesSupportPlatform}
				<SidebarItem
					name={graduatesSupportPlatform.name}
					href="/graduates-support-platform/{graduatesSupportPlatform.id}"
					{hideSidebar}
				/>
			{/each}
		</SidebarGroup>
	</div>
</div>
