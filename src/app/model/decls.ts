export interface IDeclHdr {
	id: 				number;
	calc_on_date:		Date;
	sinp_id:			number;
	is_current:			string;
	date_in:			Date;
	koeff_itogo:		number;
	remark?:			string;
	usr?:				number;
}

export class DeclHdr implements IDeclHdr {
	public id: 				number;
	public calc_on_date:	Date;
	public sinp_id:			number;
	public is_current:		string;
	public date_in:			Date;
	public koeff_itogo:		number;
	public remark?:			string;
	public usr?:			number;

	constructor (
		id: number,
		calc_on_date: Date,
		sinp_id: number,
		is_current: string,
		date_in: Date,
		koeff_itogo: number,
		remark: string,
		usr: number
	) {
		this.id				= id;
		this.calc_on_date	= calc_on_date;
		this.sinp_id		= sinp_id;
		this.is_current		= is_current;
		this.date_in		= date_in;
		this.koeff_itogo	= koeff_itogo;
		this.remark			= remark;
		this.usr			= usr;
	}

	public static declHdrFromJSON(obj: any): DeclHdr {
		return new DeclHdr(
			obj.id,
			obj.calc_on_date,
			obj.sinp_id,
			obj.is_current,
			obj.date_in,
			obj.koeff_itogo,
			obj.remark,
			obj.usr
		);
	  }

}

