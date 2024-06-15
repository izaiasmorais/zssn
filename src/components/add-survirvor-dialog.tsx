"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { registerSurvivor } from "@/api/register-survivor";
import type { CreateSurvivor, Survivor } from "@/@types/survivors";

export function AddSurvivorDialog() {
	const queryClient = useQueryClient();

	const { mutateAsync: registerSurvivorFn } = useMutation({
		mutationFn: registerSurvivor,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["survivors"] });
		},
	});

	const { register, handleSubmit, control, reset } = useForm({
		defaultValues: {
			name: "",
			age: "",
			gender: "",
			latitude: "",
			longitude: "",
			water: "",
			food: "",
			medication: "",
			ammunition: "",
		},
	});

	async function handleCreateSurvivor(data: CreateSurvivor) {
		const registerSurvivorBody = {
			...data,
			age: Number(data.age),
			latitude: Number(data.latitude),
			longitude: Number(data.longitude),
			water: Number(data.water),
			food: Number(data.food),
			medication: Number(data.medication),
			ammunition: Number(data.ammunition),
		};

		try {
			await registerSurvivorFn(registerSurvivorBody);

			reset();
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Adicionar Sobrevivente</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adicionar Sobrevivente</DialogTitle>
					<DialogDescription>
						Preencha as informações do sobrevivente corretamente.
					</DialogDescription>
				</DialogHeader>

				<form
					onSubmit={handleSubmit(handleCreateSurvivor)}
					className="flex flex-col gap-4"
				>
					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="name" className="text-right">
							Nome
						</Label>

						<Input
							id="name"
							type="text"
							placeholder="Digite o nome"
							required
							{...register("name")}
						/>
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="age" className="text-right">
							Idade
						</Label>

						<Input
							id="age"
							type="text"
							placeholder="Digite a idade"
							required
							{...register("age")}
						/>
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label htmlFor="gender" className="text-right">
							Sexo
						</Label>

						<Controller
							name="gender"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<ToggleGroup
									variant="outline"
									type="single"
									id="gender"
									className="w-full flex gap-2"
									value={field.value}
									onValueChange={field.onChange}
								>
									<ToggleGroupItem value="Masculino" className="w-full">
										Masculino
									</ToggleGroupItem>

									<ToggleGroupItem value="Femenino" className="w-full">
										Feminino
									</ToggleGroupItem>
								</ToggleGroup>
							)}
						/>
					</div>

					<div className="flex flex-col gap-2 items-start">
						<Label className="text-right">Localização</Label>

						<div className="flex items-center gap-2 w-full">
							<Input
								id="latitude"
								type="text"
								placeholder="Latitude"
								required
								{...register("latitude")}
							/>

							<Input
								id="longitude"
								type="text"
								placeholder="Longitude"
								required
								{...register("longitude")}
							/>
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
								required
								{...register("water")}
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
								required
								{...register("food")}
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
								required
								{...register("medication")}
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
								required
								{...register("ammunition")}
							/>
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="outline">
								Cancelar
							</Button>
						</DialogClose>

						<DialogClose asChild>
							<Button type="submit">Confirmar</Button>
						</DialogClose>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
