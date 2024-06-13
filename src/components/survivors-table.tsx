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
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Nome</TableHead>
					<TableHead>Idade</TableHead>
					<TableHead>Sexo</TableHead>
					<TableHead>Último Local</TableHead>
					<TableHead>Infectado</TableHead>
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
