
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

export interface ITceZV {
	id: 				number;
	tce_id:				number;
	grp_abbr:			string;
	beg_date:			string;
	beg_date_str:		string;
	end_date?:			string;
	end_date_str?:		string;
	is_active:			boolean;
	pdk?:				number;
	pdk_lower?:			number;
	num_order?: 		number;
	rough_koeff?: 		number;
	grp_name?:			string;
	grp_num_order:		number;
}

export interface ITceZVKoef {
	tce_id:				number;
	beg_date:			string;
	end_date?:			string;
	beg_date_str:		string;
	end_date_str?:		string;
	beg_is_incl?:		string;
	end_is_incl?:		string;
	pdk_beg?:			number;
	pdk_end?:			number;
	condition_?:		string;
	koef?:				number;
}

export interface ITceZapr {
	id:					number;
	tce_id:				number;
	beg_date:			string;
	end_date?:			string;
	beg_date_str:		string;
	end_date_str?:		string;
	pdk:				number;
	remark?:			string;
	ndoc_type?:			string;
	tce_name:			string;
	num_order?:			number;
	dimension?:			string;
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
