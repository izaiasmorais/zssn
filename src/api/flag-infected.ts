import type { Survivor } from "@/@types/survivors";
import { api } from "@/lib/axios";

export async function flagInfected(body: { id: string }): Promise<Survivor> {
	const response = await api.put<Survivor>("/survivors/flag-infected", body);

	return response.data;
}
