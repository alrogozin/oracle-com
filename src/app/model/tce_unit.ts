export interface ITceUnit {
	id: 				number;
	abbr: 				string;
	name: 				string;
	dimension?: 		string;
	detection_limit?: 	number;
	num_order?: 		number;
}

export class TceUnit implements ITceUnit {
	public id: number;
	public abbr: string;
	public name: string;
	public dimension?: string;
	public detection_limit?: number;
	public num_order?: number;
	constructor() {}
}
