import { AddSurvivorDialog } from "@/components/add-survirvor-dialog";
import { Summary } from "@/components/summary";
import { SurvivorsTable } from "@/components/survivors-table";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
	return (
		<main className="w-full min-h-screen flex flex-col gap-4 py-8 px-4 items-center justify-center">
			<div className="w-full max-w-[1400px]">
				<Summary />
			</div>

			<div
				className="w-full max-w-[1400px] border  rounded-lg flex
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

					<div className="flex items-center gap-2">
						<ThemeSwitcher />
						<AddSurvivorDialog />
					</div>
				</header>

				<SurvivorsTable />
			</div>
		</main>
	);
}
