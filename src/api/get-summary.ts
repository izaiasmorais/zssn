import type { Summary } from "@/@types/summary";
import { api } from "@/lib/axios";

export async function getSummary(): Promise<Summary> {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const response = await api.get<Summary>("/summary");

	return response.data;
}
