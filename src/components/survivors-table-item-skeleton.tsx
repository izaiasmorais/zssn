import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "./ui/skeleton";

export function SurvivorsTableItemSkeleton() {
	return (
		<TableRow className="hover:cursor-pointer h-[75px]">
			<TableCell>
				<Skeleton className="w-[90px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[30px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[80px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[290px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[40px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[100px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[180px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[35px] h-4" />
			</TableCell>
			<TableCell>
				<Skeleton className="w-[45px] h-4" />
			</TableCell>
		</TableRow>
	);
}
