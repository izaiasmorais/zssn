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
import { Button } from "./ui/button";

export function FlagInfectedDialog() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline" className="flex items-center gap-2">
					<Syringe size={20} />
					<p>Sinalizar Infectado</p>
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Tem certeza que quer sinalizar Izaías Lima como infectado?
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
