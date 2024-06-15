"use client";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../ui/card";
import { getSummary } from "@/api/get-summary";
import { SummarySkeleton } from "./summary-skeleton";

export function Summary() {
	const { data: summary, isLoading: isLoadingSummary } = useQuery({
		queryKey: ["summary"],
		queryFn: () => getSummary(),
	});

	if (isLoadingSummary) {
		return <SummarySkeleton />;
	}

	if (!isLoadingSummary && summary)
		return (
			<div className="flex w-full gap-4 md:flex-nowrap flex-wrap">
				<Card className="p-6 flex flex-col gap-4 w-full">
					<span>Não infectados</span>
					<strong className="text-4xl">{summary.nonInfectedPercentage}%</strong>
				</Card>

				<Card className="p-6 flex flex-col gap-4 w-full">
					<span>Infectados</span>
					<strong className="text-4xl">{summary.infectedPercentage}%</strong>
				</Card>

				<Card className="p-6 flex flex-col gap-4 w-full">
					<span>Pontos perdidos</span>
					<strong className="text-4xl">{summary.totalLostPoints}</strong>
				</Card>

				<Card className="p-6 flex flex-col gap-2 w-full">
					<span>Itens por sobrevivente</span>
					<div className="flex flex-col">
						<span className="text-xs">
							<span className="font-semibold">Água:</span>
							{summary.averageItemsPerSurvivor.water}
						</span>
						<span className="text-xs">
							<span className="font-semibold">Alimentos:</span>
							{summary.averageItemsPerSurvivor.food}
						</span>
						<span className="text-xs">
							<span className="font-semibold">Medicamentos:</span>
							{summary.averageItemsPerSurvivor.medication}
						</span>
						<span className="text-xs">
							<span className="font-semibold">Munição:</span>
							{summary.averageItemsPerSurvivor.ammunition}
						</span>
					</div>
				</Card>
			</div>
		);
}
