
export interface ITceUnit {
	id: 				number;
	tce_id:				number;
	abbr: 				string;
	name: 				string;
	dimension?: 		string;
	detection_limit?: 	number;
	num_order?: 		number;
	is_active:			boolean;
}

export class TceUnit implements ITceUnit {

	public id: 			number;
	public tce_id: 		number;
	public abbr: 		string;
	public name: 		string;
	public dimension?: 	string;
	public detection_limit?: number;
	public num_order?: 	number;
	public is_active:	boolean;

	constructor(
		id: 				number,
		tce_id:				number,
		abbr: 				string,
		name: 				string,
		dimension: 			string,
		detection_limit: 	number,
		num_order: 			number,
		is_active:			string
	) {
		this.id			= id;
		this.tce_id		= tce_id;
		this.abbr		= abbr;
		this.name		= name;
		this.dimension	= dimension;
		this.detection_limit	= detection_limit;
		this.num_order	= num_order;
		if ( is_active === 'Y') {
			this.is_active	= true;
		} else {
			this.is_active	= false;
		}
	}

	public static tceUnitFromJSON(obj: any): TceUnit {
		return new TceUnit(
			obj.id,
			obj.tce_id,
			obj.abbr,
			obj.name,
			obj.dimension,
			obj.detection_limit,
			obj.num_order,
			obj.is_active
		);
	  }

}
