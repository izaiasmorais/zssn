import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { FlagInfectedDialog } from "./flag-infected-dialog";
import { ChangeSurvivorLocationDialog } from "./change-survivor-location-dialog";
import { SurvivorInfoDialog } from "./survivor-info-dialog";

export function SurvivorsTableItem() {
	return (
		<TableRow className="hover:cursor-pointer h-[75px]">
			<TableCell className="w-[130px]">Izaías</TableCell>
			<TableCell className="w-[60px]">20</TableCell>
			<TableCell className="w-[110px]">Masculino</TableCell>
			<TableCell className="w-[350px]">
				-5.082449323252397, -42.823136360208565
			</TableCell>
			<TableCell className="w-[50px]">10</TableCell>
			<TableCell className="w-[110px]">
				<Badge variant="default" className="min-w-[106px]">
					Não infectado
				</Badge>
			</TableCell>
			<TableCell className="w-[190px]">
				<FlagInfectedDialog />
			</TableCell>
			<TableCell className="w-[45px]">
				<ChangeSurvivorLocationDialog />
			</TableCell>
			<TableCell className="w-[45px]">
				<SurvivorInfoDialog />
			</TableCell>
		</TableRow>
	);
}
