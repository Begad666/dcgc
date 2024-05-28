import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import data from "$lib/data.json";

export const load: PageLoad = ({ params }) => {
	const jobSearchPlatform = data.jobSearchPlatforms.find((v) => v.id === params.id);
	if (!jobSearchPlatform) {
		error(404, "منصة البحث عن عمل غير موجودة");
	}
	return { jobSearchPlatform };
};
