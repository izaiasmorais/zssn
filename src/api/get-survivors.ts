import type { Survivor } from "@/@types/survivors";
import { api } from "@/lib/axios";

export async function getSurvivors(): Promise<Survivor[]> {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const response = await api.get<Survivor[]>("/survivors");

	return response.data;
}
