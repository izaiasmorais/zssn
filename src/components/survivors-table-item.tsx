import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { FlagInfectedDialog } from "./flag-infected-dialog";
import { ChangeSurvivorLocationDialog } from "./change-survivor-location-dialog";
import { SurvivorInfoDialog } from "./survivor-info-dialog";

export function SurvivorsTableItem() {
	return (
		<TableRow className="hover:cursor-pointer">
			<TableCell>Izaías</TableCell>
			<TableCell>20</TableCell>
			<TableCell>Masculino</TableCell>
			<TableCell>-5.082449323252397, -42.823136360208565</TableCell>
			<TableCell>10</TableCell>

			<TableCell>
				<Badge variant="default" className="min-w-[106px]">
					Não infectado
				</Badge>
			</TableCell>

			<TableCell>
				<FlagInfectedDialog />
			</TableCell>

			<TableCell>
				<ChangeSurvivorLocationDialog />
			</TableCell>

			<TableCell>
				<SurvivorInfoDialog />
			</TableCell>
		</TableRow>
	);
}
