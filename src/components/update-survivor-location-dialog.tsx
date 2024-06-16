"use client";
import type { Survivor } from "@/@types/survivors";
import { updateSurvivorLocation } from "@/api/update-survivor-location";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, SquarePen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface UpdateSurvivorLocationDialogProps {
	survivor: Survivor;
}

export function UpdateSurvivorLocationDialog({
	survivor,
}: UpdateSurvivorLocationDialogProps) {
	const queryClient = useQueryClient();

	const [latitude, setLatitude] = useState<number>(survivor.latitude);
	const [longitude, setLongitude] = useState<number>(survivor.longitude);

	const { mutateAsync: updateSurvivorLocationFn, isPending } = useMutation({
		mutationFn: () =>
			updateSurvivorLocation({ id: survivor.id, latitude, longitude }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["survivors"] });
		},
	});

	async function handleUpdateSurvivorLocation() {
		try {
			await updateSurvivorLocationFn();

			toast.success("Localização do sobrevivente atualizada com sucesso!");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="px-2.5">
					<SquarePen size={20} />
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Alterar Localizção</DialogTitle>
					<DialogDescription>
						Altere a localização do sobrevivente. Clique em salvar quando
						terminar.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="flex flex-col gap-2 items-start">
						<Label className="text-right">Localização</Label>
						<div className="flex items-center gap-2 w-full">
							<Input
								id="latitude"
								type="number"
								value={latitude}
								onChange={(e) => setLatitude(Number(e.target.value))}
							/>
							<Input
								id="longitude"
								type="number"
								value={longitude}
								onChange={(e) => setLongitude(Number(e.target.value))}
							/>
						</div>
					</div>
				</div>

				<DialogFooter>
					<DialogClose>
						<Button type="button" variant="outline">
							Cancelar
						</Button>
					</DialogClose>

					<Button
						type="submit"
						onClick={() => handleUpdateSurvivorLocation()}
						className="flex items-center"
					>
						{isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						Confirmar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
