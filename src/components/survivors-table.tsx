"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { SurvivorsTableItem } from "./survivors-table-item";
import { useQuery } from "@tanstack/react-query";
import { getSurvivors } from "@/api/get-survivors";
import { SurvivorsTableItemSkeleton } from "./survivors-table-item-skeleton";

export function SurvivorsTable() {
	const { data: survivors, isLoading: isLoadingSurvivors } = useQuery({
		queryKey: ["survivors"],
		queryFn: () => getSurvivors(),
	});

	return (
		<Table className="rounded-md overflow-hidden">
			<TableHeader className="bg-muted">
				<TableRow>
					<TableHead>Nome</TableHead>
					<TableHead>Idade</TableHead>
					<TableHead>Sexo</TableHead>
					<TableHead>Último Local</TableHead>
					<TableHead>Pontos</TableHead>
					<TableHead>Infectado</TableHead>
					<TableHead></TableHead>
					<TableHead></TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{isLoadingSurvivors &&
					Array.from({ length: 5 }, (_, index) => {
						return <SurvivorsTableItemSkeleton key={index} />;
					})}

				{!isLoadingSurvivors && survivors && <SurvivorsTableItem />}
			</TableBody>
		</Table>
	);
}
