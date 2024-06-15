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
import { SquarePen } from "lucide-react";

export function ChangeSurvivorLocationDialog() {
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
							<Input id="latitude" type="number" value={-5.082449323252397} />
							<Input id="longitude" type="number" value={-42.823136360208565} />
						</div>
					</div>
				</div>
				<DialogFooter>
					<DialogClose>
						<Button type="button" variant="outline">
							Cancelar
						</Button>
					</DialogClose>
					<Button type="submit">Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
