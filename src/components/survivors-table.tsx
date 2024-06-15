import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { SurvivorsTableItem } from "./survivors-table-item";

export function SurvivorsTable() {
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
				<SurvivorsTableItem />
				<SurvivorsTableItem />
				<SurvivorsTableItem />
				<SurvivorsTableItem />
				<SurvivorsTableItem />
				<SurvivorsTableItem />
				<SurvivorsTableItem />
			</TableBody>
		</Table>
	);
}
