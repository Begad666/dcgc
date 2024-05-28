<script lang="ts">
	import type { PageData } from "./$types";
	import PageSkeleton from "$lib/components/PageSkeleton.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.university.name} - التوجيه المهني</title>
</svelte:head>

<PageSkeleton data={data.university} imageDir="universities" text="جامعة" />
