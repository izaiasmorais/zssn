import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function SummarySkeleton() {
	return (
		<div className="flex w-full gap-4 md:flex-nowrap flex-wrap">
			<Card className="p-6 flex flex-col gap-4 w-full">
				<Skeleton className="w-[250px] h-6" />
				<Skeleton className="w-[250px] h-10" />
			</Card>

			<Card className="p-6 flex flex-col gap-4 w-full">
				<Skeleton className="w-[250px] h-6" />
				<Skeleton className="w-[250px] h-10" />
			</Card>

			<Card className="p-6 flex flex-col gap-4 w-full">
				<Skeleton className="w-[250px] h-6" />
				<Skeleton className="w-[250px] h-10" />
			</Card>

			<Card className="p-6 flex flex-col gap-2 w-full">
				<Skeleton className="w-[250px] h-6" />
				<Skeleton className="w-[250px] h-16" />
			</Card>
		</div>
	);
}
