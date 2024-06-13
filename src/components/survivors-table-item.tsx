import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { SurvivorMenu } from "./survivor-menu";

export function SurvivorsTableItem() {
	return (
		<TableRow className="hover:cursor-pointer">
			<TableCell>Izaías</TableCell>
			<TableCell>20</TableCell>
			<TableCell>Masculino</TableCell>
			<TableCell>-5.082449323252397, -42.823136360208565</TableCell>
			<TableCell>10</TableCell>
			<TableCell>
				<Badge variant="default">Não infectado</Badge>
			</TableCell>
			<TableCell>
				<SurvivorMenu />
			</TableCell>
		</TableRow>
	);
}
