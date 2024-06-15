import { api } from "@/lib/axios";

export async function getSurvivors() {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const survivors = await api.get("/survivors");

	return survivors;
}
