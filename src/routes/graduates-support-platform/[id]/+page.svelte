<script lang="ts">
	import type { PageData } from "./$types";
	import PageSkeleton from "$lib/components/PageSkeleton.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.graduatesSupportPlatform.name} - التوجيه المهني</title>
</svelte:head>

<PageSkeleton
	data={data.graduatesSupportPlatform}
	imageDir="graduates-support-platforms"
	imageExt="png"
	text="منصة دعم الخريجين"
	textPrefix="ل"
/>
