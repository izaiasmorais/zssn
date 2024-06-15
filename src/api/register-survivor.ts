import type { RegisterSurvivorBody, Survivor } from "@/@types/survivors";
import { api } from "@/lib/axios";

export async function registerSurvivor(
	body: RegisterSurvivorBody
): Promise<Survivor> {
	const response = await api.post<Survivor>("/survivors", body);

	return response.data;
}
