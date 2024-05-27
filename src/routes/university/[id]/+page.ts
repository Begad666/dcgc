import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import data from "$lib/data.json";

export const load: PageLoad = ({ params }) => {
	const university = data.universities.find((v) => v.id === params.id);
	if (!university) {
		error(404, "الجامعة غير موجودة");
	}
	return { university };
};
