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
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function AddSurvivorDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Adicionar Sobrevivente</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adicionar Sobrevivente</DialogTitle>
					<DialogDescription>
						Preencha as informações do sobrevivente correatamente.
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="name" className="text-right">
							Nome
						</Label>
						<Input id="name" placeholder="Digite o nome" />
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="age" className="text-right">
							Idade
						</Label>
						<Input id="age" type="number" placeholder="Digite a idade" />
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="gender" className="text-right">
							Sexo
						</Label>

						<ToggleGroup
							variant="outline"
							type="single"
							id="gender"
							className="w-full flex gap-2"
						>
							<ToggleGroupItem value="male" className="w-full">
								Masculino
							</ToggleGroupItem>
							<ToggleGroupItem value="female" className="w-full">
								Feminino
							</ToggleGroupItem>
						</ToggleGroup>
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label className="text-right">Localização</Label>
						<div className="flex items-center gap-2 w-full">
							<Input id="latitude" type="number" placeholder="Latitude" />
							<Input id="longitude" type="number" placeholder="Longitude" />
						</div>
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="food" className="text-right">
							Itens
						</Label>

						<div className="grid grid-cols-4 items-center gap-4 w-full">
							<Label className="text-right" htmlFor="water">
								Água
							</Label>
							<Input
								id="water"
								type="number"
								className="col-span-3"
								placeholder="Quantidade de água"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4 w-full">
							<Label className="text-right" htmlFor="food">
								Comida
							</Label>
							<Input
								id="food"
								type="number"
								className="col-span-3"
								placeholder="Quantidade de comida"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4 w-full">
							<Label className="text-right" htmlFor="medication">
								Medicação
							</Label>
							<Input
								id="medication"
								type="number"
								className="col-span-3"
								placeholder="Quantidade de medicação"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4 w-full">
							<Label className="text-right" htmlFor="ammunition">
								Munição
							</Label>
							<Input
								id="ammunition"
								type="number"
								className="col-span-3"
								placeholder="Quantidade de munição"
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
					<Button type="submit">Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
