<script lang="ts">
	import type { PageData } from "./$types";
	import PageSkeleton from "$lib/components/PageSkeleton.svelte";

	export let data: PageData;
</script>

<PageSkeleton
	data={data.university}
	imageDirectory="universities"
	altText="جامعة"
	linkText="جامعة"
/>
