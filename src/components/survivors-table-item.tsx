import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

export function SurvivorsTableItem() {
	return (
		<TableRow>
			<TableCell>Izaías</TableCell>
			<TableCell>20</TableCell>
			<TableCell>Masculino</TableCell>
			<TableCell>-5.082449323252397, -42.823136360208565</TableCell>
			<TableCell>
				<Badge variant="destructive">Não infectado</Badge>
			</TableCell>
		</TableRow>
	);
}
