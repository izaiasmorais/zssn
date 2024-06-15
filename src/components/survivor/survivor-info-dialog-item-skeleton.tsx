import { Skeleton } from "../ui/skeleton";

export function SurvivorInfoDialogItemSkeleton() {
	return (
		<div className="flex flex-col gap-1">
			<Skeleton className="w-28 h-4" />
			<Skeleton className="w-[375px] h-6" />
		</div>
	);
}
