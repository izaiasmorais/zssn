import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Syringe } from "lucide-react";

export function FlagInfectedDialog() {
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<div className="flex items-center gap-2">
					<Syringe size={20} />
					Sinalizar Infectado
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Tem certeza que quer sinalizar <br />
						Izaías Lima <br /> como infectado?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Isso não pode ser desfeito, vai permanentemente marcá-lo como
						infectado.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction>Confirmar</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
