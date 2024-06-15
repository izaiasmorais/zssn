"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { Badge } from "../ui/badge";
import { SurvivorInfoDialogItem } from "./survivor-info-dialog-item";
import type { Survivor } from "@/@types/survivors";

interface SurvivorInfoDialogProps {
	survivor: Survivor;
}

export function SurvivorInfoDialog({ survivor }: SurvivorInfoDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="px-2.5">
					<Eye size={20} />
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Informações</DialogTitle>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<SurvivorInfoDialogItem content="Nome">
						{survivor.name}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Idade">
						{survivor.age}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Sexo">
						{survivor.gender}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Localização">
						{survivor.latitude}, {survivor.longitude}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Estado">
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
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Sinalizações de Infectado">
						{survivor.infectionReports} / 3
					</SurvivorInfoDialogItem>

					<h1 className="text-medium font-medium text-muted-foreground">
						Quantidade de Suprimentos:
					</h1>

					<SurvivorInfoDialogItem content="Água">
						{survivor.water}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Alimentos">
						{survivor.food}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Medicamentoso">
						{survivor.medication}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Munição">
						{survivor.ammunition}
					</SurvivorInfoDialogItem>

					<SurvivorInfoDialogItem content="Pontos Totais">
						{survivor.points}
					</SurvivorInfoDialogItem>
				</div>
			</DialogContent>
		</Dialog>
	);
}
