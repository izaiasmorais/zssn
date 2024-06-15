"use client";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { flagInfected } from "@/api/flag-infected";
import { toast } from "sonner";
import { getSurvivorById } from "@/api/get-survivor-by-id";

interface FlagInfectedDialogProps {
	id: string;
}

export function FlagInfectedDialog({ id }: FlagInfectedDialogProps) {
	const { data: survivor } = useQuery({
		queryKey: ["survivor"],
		queryFn: () => getSurvivorById(id),
	});

	const { data, mutateAsync: flagInfectedFn } = useMutation({
		mutationFn: () => flagInfected({ id }),
	});

	console.log(data);

	async function handleFlagInfected() {
		try {
			await flagInfectedFn();

			if (survivor?.infectionReports === 2) {
				toast.error(`${survivor?.name} foi confirmado como infectado!`);
			} else {
				toast.success(`${survivor?.name} foi sinalizado como infectado!`);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					disabled={survivor?.infected}
					variant="outline"
					className="flex items-center gap-2"
				>
					<Syringe size={20} />
					<p>Sinalizar Infectado</p>
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Tem certeza que quer sinalizar {survivor?.name} como infectado?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Isso não pode ser desfeito, vai permanentemente marcá-lo como
						infectado.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={() => handleFlagInfected()}>
						Confirmar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
