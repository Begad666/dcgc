<script lang="ts">
	import type { PageData } from "./$types";
	import PageSkeleton from "$lib/components/PageSkeleton.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.jobSearchPlatform.name} - التوجيه المهني</title>
</svelte:head>

<PageSkeleton
	data={data.jobSearchPlatform}
	imageDir="job-search-platforms"
	imageExt="png"
	text="منصة البحث عن عمل"
	textPrefix="ل"
/>
