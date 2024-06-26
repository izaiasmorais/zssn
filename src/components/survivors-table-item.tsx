import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { FlagInfectedDialog } from "./flag-infected-dialog";
import { UpdateSurvivorLocationDialog } from "./update-survivor-location-dialog";
import { SurvivorInfoDialog } from "./survivor/survivor-info-dialog";
import type { Survivor } from "@/@types/survivors";

interface SurvivorsTableItemProps {
	survivor: Survivor;
}

export function SurvivorsTableItem({ survivor }: SurvivorsTableItemProps) {
	return (
		<TableRow className="hover:cursor-pointer h-[75px]">
			<TableCell className="w-[130px]">{survivor.name}</TableCell>
			<TableCell className="w-[60px]">{survivor.age}</TableCell>
			<TableCell className="w-[110px]">{survivor.gender}</TableCell>
			<TableCell className="w-[350px]">
				{survivor.latitude}, {survivor.longitude}
			</TableCell>
			<TableCell className="w-[50px]">{survivor.points}</TableCell>
			<TableCell className="w-[110px]">
				{survivor.infected === false && (
					<Badge variant="default" className="w-[106px]">
						Não Infectado
					</Badge>
				)}

				{survivor.infected === true && (
					<Badge
						variant="destructive"
						className="flex justify-center w-[106px]"
					>
						Infectado
					</Badge>
				)}
			</TableCell>
			<TableCell className="w-[190px]">
				<FlagInfectedDialog survivor={survivor} />
			</TableCell>
			<TableCell className="w-[45px]">
				<UpdateSurvivorLocationDialog survivor={survivor} />
			</TableCell>
			<TableCell className="w-[45px]">
				<SurvivorInfoDialog survivor={survivor} />
			</TableCell>
		</TableRow>
	);
}
