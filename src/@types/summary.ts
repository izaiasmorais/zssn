export interface Summary {
	infectedPercentage: number;
	nonInfectedPercentage: number;
	totalLostPoints: number;
	averageItemsPerSurvivor: AverageItemsPerSurvivor;
}

export interface AverageItemsPerSurvivor {
	water: number;
	food: number;
	medication: number;
	ammunition: number;
}
