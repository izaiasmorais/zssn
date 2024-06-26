export interface Survivor {
	id: string;
	name: string;
	age: number;
	gender: string;
	latitude: number;
	longitude: number;
	infectionReports: number;
	infected: boolean;
	water: number;
	food: number;
	medication: number;
	ammunition: number;
	points: number;
}

export interface CreateSurvivor {
	name: string;
	age: string;
	gender: string;
	latitude: string;
	longitude: string;

	water: string;
	food: string;
	medication: string;
	ammunition: string;
}

export interface RegisterSurvivorBody {
	name: string;
	gender: string;
	age: number;
	latitude: number;
	longitude: number;
	water: number;
	food: number;
	medication: number;
	ammunition: number;
}

export interface UpdateSurvivorLocationBody {
	id: string;
	latitude: number;
	longitude: number;
}
