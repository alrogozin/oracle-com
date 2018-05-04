export interface IDeclDataUnit {
	id:					number;
	hdr_id:				number;
	tce_id:				number;
	enpp_id:			number;
	pdk:				number;
	pdk_lower?:			number;
	rough_koeff?:		number;
	grp_abbr?:			string;
	tce_abbr:			string;
	tce_name:			string;
	num_order?:			number;
	dimension?:			string;
}

export class DeclDataUnit implements IDeclDataUnit {

	public id: 				number;
	public hdr_id: 			number;
	public tce_id: 			number;
	public enpp_id:			number;
	public pdk: 			number;
	public pdk_lower?:		number;
	public rough_koeff?:	number;
	public grp_abbr?:		string;
	public tce_abbr: 		string;
	public tce_name: 		string;
	public num_order?: 		number;
	public dimension?: 		string;

	constructor(
		id:					number,
		hdr_id:				number,
		tce_id:				number,
		enpp_id:			number,
		pdk?:				number,
		grp_abbr?:			string,
		tce_abbr?:			string,
		tce_name?:			string,
		pdk_lower?:			number,
		rough_koeff?:		number,
		num_order?:			number,
		dimension?:			string
	) {
		this.id = id;
		this.hdr_id = hdr_id;
		this.tce_id = tce_id;
		this.enpp_id = enpp_id;
		this.pdk = pdk;
		this.pdk_lower = pdk_lower;
		this.rough_koeff = rough_koeff;
		this.grp_abbr = grp_abbr;
		this.tce_abbr = tce_abbr;
		this.tce_name = tce_name;
		this.num_order = num_order;
		this.dimension = dimension;
	}

	public static DeclDataUnitFromJSON(obj: any): DeclDataUnit {
		return new DeclDataUnit(
				obj.id,
				obj.hdr_id,
				obj.tce_id,
				obj.enpp_id,
				obj.pdk,
				obj.grp_abbr,
				obj.tce_abbr,
				obj.tce_name,
				obj.pdk_lower,
				obj.rough_koeff,
				obj.num_order,
				obj.dimension
		);
	}

}
