import { Summary } from "@/components/summary";
import { SurvivorsTable } from "@/components/survivors-table";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="w-full h-screen flex flex-col gap-4 items-center justify-center">
			<div className="w-full max-w-[1100px]">
				<Summary />
			</div>

			<div
				className="w-full max-w-[1100px] border border-slate-300 rounded-lg flex
			flex-col p-6 gap-4"
			>
				<header className="flex items-center justify-between">
					<div>
						<h1 className="text-foreground text-2xl font-medium">
							Sobreviventes
						</h1>
						<p className="text-muted-foreground">
							Lista de sobreviventes ao apocalipse.
						</p>
					</div>

					<Button>Adicionar Sobrevivente</Button>
				</header>

				<SurvivorsTable />
			</div>
		</main>
	);
}
