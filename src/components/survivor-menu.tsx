import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Eye, SquarePen, Syringe } from "lucide-react";
import { FlagInfectedDialog } from "./flag-infected-dialog";

export function SurvivorMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<EllipsisVertical />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem className="py-2 hover:cursor-pointer">
					<div className="flex items-center gap-2">
						<Eye size={20} />
						Vizaulizar Informações
					</div>
				</DropdownMenuItem>
				<DropdownMenuItem className="py-2 hover:cursor-pointer">
					<div className="flex items-center gap-2">
						<SquarePen size={20} />
						Editar Localização
					</div>
				</DropdownMenuItem>
				<DropdownMenuItem className="py-2 hover:cursor-pointer">
					<FlagInfectedDialog />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
