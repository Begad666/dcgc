import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import data from "$lib/data.json";

export const load: PageLoad = ({ params }) => {
	const graduatesSupportPlatform = data.graduatesSupportPlatforms.find((v) => v.id === params.id);
	if (!graduatesSupportPlatform) {
		error(404, "منصة دعم الخريجين غير موجودة");
	}
	return { graduatesSupportPlatform };
};
