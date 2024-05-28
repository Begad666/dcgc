<script lang="ts">
	import type { Model } from "../types";

	export let imageDir = "";
	export let imageExt = "jpg";
	export let textPrefix = "لل";
	export let text = "";
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

	$: actualText = data.override?.text ?? text;
</script>

<div class="flex flex-col items-center md:p-3">
	{#key data.id}
		<a
			href={data.link}
			target="_blank"
			title="رابط الموقع الإلكتروني {textPrefix}{actualText}"
			class="md:rounded-3xl"
			class:bg-base-300={data.override?.darkerImageBackground}
			><img
				src="/images/{imageDir}/{data.id}.{imageExt}"
				class="md:rounded-3xl w-full md:w-[540px] max-h-[340px] md:border-primary md:border-solid md:border-4"
				class:p-1={data.override?.imagePadding}
				height={data.image.height}
				width={data.image.width}
				alt="صورة {textPrefix}{text}"
			/></a
		>
	{/key}
	<h1 class="text-base-content mt-2 text-2xl md:text-3xl font-bold">{data.name}</h1>
	<div class="prose w-full mt-2 p-3">
		{data.description}
		<br />
	</div>
	<a class="link text-lg" href={data.link} target="_blank"
		>رابط الموقع الإلكتروني {textPrefix}{actualText}</a
	>
</div>
