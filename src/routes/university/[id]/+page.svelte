<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="flex flex-col items-center md:p-3">
	<a href={data.university.link} title="صفحة الجامعة"
		><img
			src="/images/universities/{data.university.id}.jpg"
			class="md:rounded-3xl w-full md:w-[540px] max-h-[340px] md:border-primary md:border-solid md:border-4"
			height="{data.university.image.height}px"
			width="{data.university.image.width}px"
			alt="صورة للجامعة"
		/></a
	>
	<h1 class="text-base-content text-2xl md:text-3xl font-bold">{data.university.name}</h1>
	<div class="prose w-full mt-2 p-3">
		{data.university.description}
		<br />
	</div>
	<a class="link text-lg" href={data.university.link}>رابط الموقع الإلكتروني للجامعة</a>
</div>
