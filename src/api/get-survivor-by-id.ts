import type { Survivor } from "@/@types/survivors";
import { api } from "@/lib/axios";

export async function getSurvivorById(id: string): Promise<Survivor> {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const response = await api.get<Survivor>(`/survivors/${id}`);

	return response.data;
}
