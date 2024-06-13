import { Card } from "./ui/card";

export function Summary() {
	return (
		<div className="flex w-full gap-4">
			<Card className="p-6 flex flex-col gap-4 w-full">
				<span>Não infectados</span>
				<strong className="text-4xl">77%</strong>
			</Card>
			<Card className="p-6 flex flex-col gap-4 w-full">
				<span>Infectados</span>
				<strong className="text-4xl">23%</strong>
			</Card>
			<Card className="p-6 flex flex-col gap-4 w-full">
				<span>Pontos perdidos</span>
				<strong className="text-4xl">134</strong>
			</Card>
			<Card className="p-6 flex flex-col gap-2 w-full">
				<span>Itens por sobrevivente</span>
				<div className="flex flex-col">
					<span className="text-xs">
						<span className="font-semibold">Água:</span> 3
					</span>
					<span className="text-xs">
						<span className="font-semibold">Alimentos:</span> 5
					</span>
					<span className="text-xs">
						<span className="font-semibold">Medicamentos:</span> 2
					</span>
					<span className="text-xs">
						<span className="font-semibold">Munição:</span> 7
					</span>
				</div>
			</Card>
		</div>
	);
}
