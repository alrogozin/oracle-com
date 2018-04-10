import { TceUnit, ITceZVKoef } from './../model/tce_unit';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ITceZV } from '../model/tce_unit';

const DB_SERVER = 'http://vlswswin10-03:3500';

@Injectable()
export class TceService {

	constructor(private http: Http) {
	}

	getAllTce(): Promise<TceUnit[]> {
		return this.http
			.get(DB_SERVER + '/eco_vtce_unit?order=num_order.asc')
			.toPromise()
			.then( response => response.json() as TceUnit[] )
			.catch(this.HandleError)
			;
	}

	getTceZV(tce_id: number): Promise<ITceZV[]> {
		return this.http
			.get(DB_SERVER + '/enpp_vtype_zv?tce_id=eq.'+tce_id+'&order=beg_date.desc')
			.toPromise()
			.then( response => response.json() as ITceZV[] )
			.catch(this.HandleError)
			;
	}

	getTceZVKoef(tce_id: number): Promise<ITceZV[]> {
		return this.http
			.get(DB_SERVER + '/enpp_vtype_zv_koef?tce_id=eq.'+tce_id+'&order=beg_date.desc')
			.toPromise()
			.then( response => response.json() as ITceZVKoef[] )
			.catch(this.HandleError)
			;
	}

	private HandleError(error: any): Promise<any> {
		console.error('Error: ' + error);
		return Promise.reject(error.message || error);
	}

}
