import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { Badge } from "./ui/badge";

export function SurvivorInfoDialog() {
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
					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Nome</span>
						<strong>Izaías Lima</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Idade</span>
						<strong>20</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Sexo</span>
						<strong>Masculino</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Localização</span>
						<strong>-5.082449323252397, -42.823136360208565</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Estado</span>
						<strong>
							<Badge variant="default">Não infectado</Badge>
						</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">
							Sinalizações de Infectado
						</span>
						<strong>2/3</strong>
					</div>

					<h1 className="text-medium font-medium text-muted-foreground">
						Quantidade de Suprimentos:
					</h1>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Água</span>
						<strong>4</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Alimentos</span>
						<strong>7</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Medicamentos</span>
						<strong>2</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Munição</span>
						<strong>23</strong>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-muted-foreground text-xs">Pontos Totais</span>
						<strong>64</strong>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
