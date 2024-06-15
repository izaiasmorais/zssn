interface SurvivorInfoDialogItemProps {
	children: React.ReactNode;
	content: string;
}

export function SurvivorInfoDialogItem({
	children,
	content,
}: SurvivorInfoDialogItemProps) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-muted-foreground text-xs">{content}</span>
			<strong>{children}</strong>
		</div>
	);
}
