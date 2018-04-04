export interface ITceUnit {
	id: 				number;
	tce_id:				number;
	abbr: 				string;
	name: 				string;
	dimension?: 		string;
	detection_limit?: 	number;
	num_order?: 		number;
}

export class TceUnit implements ITceUnit {

	public id: 			number;
	public tce_id: 		number;
	public abbr: 		string;
	public name: 		string;
	public dimension?: 	string;
	public detection_limit?: number;
	public num_order?: 	number;

	constructor(
		id: 				number,
		tce_id:				number,
		abbr: 				string,
		name: 				string,
		dimension: 			string,
		detection_limit: 	number,
		num_order: 			number
	) {
		this.id			= id;
		this.tce_id		= tce_id;
		this.abbr		= abbr;
		this.name		= name;
		this.dimension	= dimension;
		this.detection_limit	= detection_limit;
		this.num_order	= num_order;
	}

	public static tceUnitFromJSON(obj: any): TceUnit {
		return new TceUnit(
			obj.id,
			obj.tce_id,
			obj.abbr,
			obj.name,
			obj.dimension,
			obj.detection_limit,
			obj.num_order
		);
	  }

}
