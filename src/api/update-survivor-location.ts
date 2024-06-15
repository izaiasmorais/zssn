import type { UpdateSurvivorLocationBody } from "@/@types/survivors";
import { api } from "@/lib/axios";

export async function updateSurvivorLocation(body: UpdateSurvivorLocationBody) {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const response = await api.put("/survivors/location", body);

	return response.data;
}
