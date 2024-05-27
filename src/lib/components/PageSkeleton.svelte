<script lang="ts">
	import type { Model } from "../types";

	export let imageDirectory = "";
	export let altText = "";
	export let linkText = "";
	export let data: Model = {
		id: "",
		name: "",
		description: "",
		link: "",
		image: {
			height: 0,
			width: 0
		}
	};
</script>

<div class="flex flex-col items-center md:p-3">
	<a href={data.link} title="صفحة الجامعة"
		><img
			src="/images/{imageDirectory}/{data.id}.jpg"
			class="md:rounded-3xl w-full md:w-[540px] max-h-[340px] md:border-primary md:border-solid md:border-4"
			height="{data.image.height}px"
			width="{data.image.width}px"
			alt="صورة لل{altText}"
		/></a
	>
	<h1 class="text-base-content text-2xl md:text-3xl font-bold">{data.name}</h1>
	<div class="prose w-full mt-2 p-3">
		{data.description}
		<br />
	</div>
	<a class="link text-lg" href={data.link}>رابط الموقع الإلكتروني لل{linkText}</a>
</div>
