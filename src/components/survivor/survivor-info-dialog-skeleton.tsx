import { SurvivorInfoDialogItemSkeleton } from "./survivor-info-dialog-item-skeleton";

export function SurvivorInfoDialogSkeleton() {
	return (
		<div className="grid gap-4 py-4">
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />

			<h1 className="text-medium font-medium text-muted-foreground">
				Quantidade de Suprimentos:
			</h1>

			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
			<SurvivorInfoDialogItemSkeleton />
		</div>
	);
}
